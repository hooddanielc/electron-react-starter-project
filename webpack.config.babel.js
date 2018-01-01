import path from 'path';

export default {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  target: 'node-webkit',
  resolve: {
    extensions: [".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: [
                '@babel/plugin-proposal-object-rest-spread'
              ],
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: [
                '@babel/plugin-proposal-object-rest-spread'
              ],
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      }
    ]
  }
};
