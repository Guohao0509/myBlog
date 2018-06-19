module.exports = {
  build: {
    cache: {
      max: 1000,
      maxAge: 3600000
    },
    vendor: ['axios', '~/plugins/http.js', 'marked'],
    extend (config, { isDev, isClient }) {
      // config.module.rules.find((rule) => {
      //   if (rule.loader === 'sass-loader') {
      //     rule = {
      //       test: /\.scss$/,
      //       loaders: ['style', 'css', 'sass']
      //     }
      //   }
      // }) 
    }
  },
  css: [
    {src: '~/assets/primer.css', lang: 'css'},
    {src: '~/assets/reset.css', lang: 'css'},
    {src: '~/assets/global.css', lang: 'css'}
  ],
  plugins: ['~/plugins/http.js', '~/plugins/highlight.js', '~/plugins/time_format.js'],
  // router: {
  //   middleware: ['article']
  // }
}