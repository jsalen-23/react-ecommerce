const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnvWebPackPlugin = require('dotenv-webpack');

module.exports = (env, args) => {
  const { mode } = args;
  const isProduction = mode === 'production';

  return {
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      publicPath: '/',
      clean: true,
    },
    devServer: {
      port: 3000,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
      compress: true,
      historyApiFallback: true,
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: path.resolve(__dirname, 'node_modules/'),
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new DotEnvWebPackPlugin({
        path: path.resolve(__dirname, '.env'),
        safe: true,
        systemvars: true,
        defaults: false,
      }),
    ],
  };
};
