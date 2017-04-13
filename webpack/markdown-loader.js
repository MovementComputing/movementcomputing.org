/* eslint-disable */
const fm = require('front-matter');
const marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

module.exports = function(source) {
  const contents = fm(source);
  contents.body = marked(contents.body);
  return JSON.stringify(contents);
};
