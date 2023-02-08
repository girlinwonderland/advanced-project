import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export const buildPlugin = (path: string, isDev: boolean): webpack.WebpackPluginInstance[] => [
    new HtmlWebpackPlugin({ template: path }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
];
