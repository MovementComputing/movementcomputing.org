/* eslint-disable */
const chokidar = require('chokidar');
const fm = require('front-matter');
const fs = require('fs');
const marked = require('marked');
const path = require('path');

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

function generatePages(srcDir) {
  fs.readdir(srcDir, (err, files) => {
    if (err) throw err;
    const skeleton = fs.readFileSync(
      './skeletons/_page.vue', { encoding: 'utf8' });
    const allpages = files
      .filter(x => path.extname(x) === '.md');
    for (let i = 0; i < allpages.length; i += 1) {
      fs.writeFileSync(`./pages/${path.basename(allpages[i], '.md')}.vue`, skeleton.replace(/{{MARKDOWNFILE}}/i, `../${srcDir}${allpages[i]}`));
    }
  });
}

function updatePostList() {
  fs.readdir('./content/posts/', (err, srcfiles) => {
    if (err) throw err;
    const allpages = srcfiles
      .filter(x => path.extname(x) === '.md');
    const postList = [];
    for (let i = 0; i < allpages.length; i += 1) {
      const contents = fm(fs.readFileSync(`./content/posts/${allpages[i]}`, { encoding: 'utf8' }));
      contents.body = marked(contents.body.slice(0, 256));
      postList.push(contents);
    }
    postList.sort((a, b) => {
      if (a.attributes.date > b.attributes.date) { return -1; }
      if (a.attributes.date < b.attributes.date) { return 1; }
      return 0;
    });
    fs.writeFileSync(
      './content/postlist.json',
      JSON.stringify(postList));
  });
}

fs.readdir('./pages', (err, dstfiles) => {
  if (err) throw err;
  // Remove Vue files from pages
  dstfiles.filter(x => path.extname(x) === '.vue').forEach((filename) => {
    fs.unlinkSync(`./pages/${filename}`);
  });

  // Copy index page
  fs.createReadStream('./skeletons/index.vue')
    .pipe(fs.createWriteStream('./pages/index.vue'));

  // Generate Pages and Post List
  generatePages('content/');
  generatePages('content/posts/');
  updatePostList();
});

if (process.argv.length <= 2 || process.argv[2] !== 'production') {
  const watcher = chokidar.watch('./content/**/*.md');
  watcher.on('ready', () => {
    watcher.on('all', (e, filename) => {
      if (e === 'unlink') {
        fs.unlinkSync(`./pages/${path.basename(filename, '.md')}.vue`);
      } else if (e === 'error') {
        throw filename;
      } else {
        const skeleton = fs.readFileSync(
          './skeletons/_page.vue', { encoding: 'utf8' });
        fs.writeFileSync(
          `./pages/${path.basename(filename, '.md')}.vue`,
          skeleton.replace(/{{MARKDOWNFILE}}/i, `../${filename}`));
      }
    });
  });
}
