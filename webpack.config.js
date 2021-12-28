const path = require('path');

module.exports = {
  mode:'development',

  entry: {
    search : './src/widgets/searchWidget.js',       // <--- Search Widget Entry
    name   : './src/widgets/nameWidget.js',         // <--- name Widget Entry
  },
  output: {
      filename: 'widget_[name]_bundle.js',
      path: path.join(__dirname, 'dist'),
      libraryTarget: 'umd',
      library: 'MyApp',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    //  contentBase: path.join(__dirname, 'public'),
    static : {
      directory : path.join(__dirname, "public/")
    },
//       port: 3000,
//       // publicPath
//       devMiddleware:{
//          publicPath: "https://localhost:3000/dist/",
//       },
//       // hotOnly
//       hot: "only",
  }

  // mode:'development',
  //   entry: './src/index.js',
  //   output: {
  //       filename: 'bundle.js',
  //       // filename: './src/Component/search.js',
  //       path: path.join(__dirname, 'public'),
  //       library: 'MyApp',
  //       libraryTarget: 'umd',
  //       // port;
  //       umdNamedDefine: true,
  //   },
    
};