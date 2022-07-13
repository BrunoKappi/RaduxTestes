const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  console.log("env",env)
  return {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'index.html',
        template: 'public/index.html'
      })
    ]
  }
}
