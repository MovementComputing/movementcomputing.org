import { readFileSync } from 'fs'
import { Cite } from '@citation-js/core'
import '@citation-js/plugin-bibtex'



export default function bibtexPlugin() {
  return {
    name: 'bib-loader',
    async transform(_ : string, id : string) {
      const bibRegEx = /\.bib$/;
      if (bibRegEx.test(id)) {
        const bib = readFileSync(id).toString();
        const cite = new Cite(bib, {
          forceType: '@bibtex/text',
          generateGraph: false,
        });
        const buf = Buffer.from(JSON.stringify(cite.get()));

        return { code: `export default ${buf}` }
      }
      return {};
    },
  };
}