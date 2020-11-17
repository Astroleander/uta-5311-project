const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const StandardCssLoader = [
  { loader: MiniCssExtractPlugin.loader },
  {
    loader: 'css-loader',
    options: {
      modules: { auto: true, localIdentName: '[local]_MODULE_[contenthash:6]' }
    }
  }
];

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  target: 'web',
  output: {
    filename: '[name].bundle.[contenthash:6].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src')
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: ['/node-modules/']
      },
      {
        test: /\.css$/,
        use: StandardCssLoader,
      },
      {
        test: /\.less$/,
        use: StandardCssLoader.concat(
          { loader: 'less-loader' }
        )
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:6].css",
      chunkFilename: "chunk.[id].[contenthash:6].css",
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9090
  }
}