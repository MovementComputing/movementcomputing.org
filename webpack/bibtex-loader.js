/* eslint-disable */
const parse = require('bib2json');
const marked = require('marked');

module.exports = function(source) {
  const bibStrings = source.split('@').slice(1).map(x => `@${x}`);
  const bib_raw = parse(source);
  const bibdata = {};
  for (var i = 0; i < bib_raw.entries.length; i++) {
    bibdata[bib_raw.entries[i].EntryKey] = bib_raw.entries[i].Fields;
    bibdata[bib_raw.entries[i].EntryKey]['entrytype'] = bib_raw.entries[i].EntryType;
    bibdata[bib_raw.entries[i].EntryKey]['citekey'] = bib_raw.entries[i].EntryKey;
    bibdata[bib_raw.entries[i].EntryKey]['bibstring'] = marked(bibStrings[i]);
  }
  return `export default ${JSON.stringify(bibdata)}`;
};
