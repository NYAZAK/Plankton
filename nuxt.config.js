module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Plankton - Monitor hot topics and news about each crypto currencies (bitcoin, ethereum ...)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Monitor hot topics and news about each crypto currencies using reddit, twitter, and graphical analysis at the same place' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    '~assets/css/normalize.css',
    'tachyons/css/tachyons.min.css',
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
