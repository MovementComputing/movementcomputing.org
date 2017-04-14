const cssnext = require('postcss-cssnext');
const path = require('path');
const recursiveReaddir = require('recursive-readdir');

module.exports = {
  /*
   * Headers of the page
   */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans' },
    ],
  },
  /*
   * Global CSS
   */
  css: ['~assets/css/main.css'],
  /*
   * Customize the progress-bar color
   */
  loading: { color: '#3B8070' },
  /*
   * Build configuration
   */
  build: {
    // analyze: true,
    postcss: [cssnext()],
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.bib$/,
        loader: './webpack/bibtex-loader',
      },
    ],
    /*
     * Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  generate: {
    routes(callback) {
      recursiveReaddir('./content/', (err, files) => {
        callback(null,
          files
            .filter(x => path.extname(x) === '.md')
            .map(x => `/${path.basename(x, '.md')}/`));
      });
    },
  },
};
