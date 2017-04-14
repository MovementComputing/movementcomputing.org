const chokidar = require('chokidar'); // eslint-disable-line
const fm = require('front-matter');
const fs = require('fs');
const marked = require('marked');
const path = require('path');
const recursiveReaddir = require('recursive-readdir');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

function updatePostList() {
  const srcfiles = fs.readdirSync('./content/posts/');
  const allpages = srcfiles.filter(x => path.extname(x) === '.md');
  const postList = [];
  for (let i = 0; i < allpages.length; i += 1) {
    const contents = fm(fs.readFileSync(`./content/posts/${allpages[i]}`, { encoding: 'utf8' }));
    contents.body = marked(contents.body.slice(0, 256));
    postList.push(contents);
  }
  postList.sort((a, b) => {
    if (a.attributes.date > b.attributes.date) {
      return -1;
    }
    if (a.attributes.date < b.attributes.date) {
      return 1;
    }
    return 0;
  });
  fs.writeFileSync('./static/content/postlist.json', JSON.stringify(postList));
}

function updateItem(filename, genPostList = false) {
  console.log('Update File: ', filename);
  const mData = fm(fs.readFileSync(filename, { encoding: 'utf8' }));
  mData.body = marked(mData.body);
  fs.writeFileSync(`./static/content/${mData.attributes.slug}.json`, JSON.stringify(mData));
  if (genPostList && mData.attributes.type === 'post') {
    updatePostList();
  }
}

const watcher = chokidar.watch('./content/**/*.md');
watcher.on('ready', () => {
  if (!fs.existsSync('./static/content')) {
    fs.mkdirSync('./static/content');
  }
  recursiveReaddir('./content/', (err, files) => {
    files.filter(x => path.extname(x) === '.md').forEach((x) => {
      updateItem(x, false);
    });
    updatePostList();
  });
  if (process.argv.length > 2 && process.argv[2] === 'production') {
    watcher.close();
    return;
  }
  watcher.on('all', (e, filename) => {
    if (e === 'unlink') {
      fs.unlinkSync(`./static/content/${path.basename(filename, '.md')}.json`);
    } else if (e === 'error') {
      throw filename;
    } else {
      updateItem(filename);
    }
  });
});
