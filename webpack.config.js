const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

const filename = ext => isDev ? `bundle.${ext}` : `bundle.[fullhash].${ext}`;

// Создаем массив плагинов правильно
const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
    favicon: "./favicon.ico",
    minify: isProd,
  }),
  new CleanWebpackPlugin(),
  new CopyPlugin({
    patterns: [
      {from: path.resolve(__dirname, "src/favicon.ico"), to: path.resolve(__dirname, "dist")},
    ],
  }),
  new MiniCssExtractPlugin({
    filename: filename('css'),
  }),
];

// Добавляем ESLint только в development
if (isDev) {
  plugins.push(new ESLintPlugin({
    extensions: ['js'],
    exclude: 'node_modules',
    fix: true,
    // УБРАЛИ useEslintrc и overrideConfig
    overrideConfigFile: path.resolve(__dirname, 'eslint.config.js') // указываем явно путь к конфигу
  }));
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: isDev ? 'development' : 'production',
  entry: {
    index: './index.js',
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
    }
  },
  devtool: isDev ? 'source-map' : false,
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3535,
    hot: isDev,
    open: true
  },
}