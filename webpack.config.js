module.exports = {
  devtool: 'eval',
  entry: {
    include: ['app/web/page'],
    exclude: ['app/web/page/[a-z]+/component', 'app/web/page/test'],
    loader: {
      client: 'app/web/framework/entry/client-loader.js',
      server: 'app/web/framework/entry/server-loader.js'
    }
  },
  alias: {
    '@': 'app/web'
  },
  dll: ['react', 'react-dom'],
  cssModule: {
    include: 'app/web/asset/css/module'
  },
  loaders: {},
  plugins: {},
  done() {
    console.log('---webpack compile finish---');
  }
};
