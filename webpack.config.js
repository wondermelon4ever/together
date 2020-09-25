var webpack = require('webpack');

// const config = {
//   resolve: {
//     alias: {
//       'app': path.resolve(__dirname, 'src/components/views/common/'),
//     },
//   },
// };

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname+'/public/',
    filename: 'bundle.js'
  },

  devtool: "source-map", 
  resolve: {
    extensions: [".ts", ".tsx", '.js'],
    modules: ['node_modules']
  },
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 4000,
    contentBase: __dirname+'/public/',
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['react','es2015', 'stage-2']
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['@babel/env','@babel/react']
        }
      },
      {
        test: /\.css$/i,
        include: /node_modules/,
        use: [
          'style-loader', 
          { 
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ]
      },
      {
        // .ts나 .tsx 확장자를 ts-loader가 트랜스파일
        test: /\.tsx?$/, loader: "ts-loader"
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};