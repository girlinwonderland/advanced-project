import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildPlugin } from './buildPlugin';
import { buildDevServer } from './buildDevServer';
import { IBuildOptions } from './types';

export const buildWebpackConfig = ({
    mode, path, port, isDev, apiUrl, project,
}: IBuildOptions): webpack.Configuration => ({
    mode,
    entry: path.entry,
    module: {
        rules: buildLoaders(isDev),
    },
    resolve: buildResolve(path.src),
    plugins: buildPlugin(path.html, isDev, apiUrl, project, path.locales, path.buildLocales),
    output: {
        filename: '[name].[contenthash].js',
        path: path.output,
        clean: true,
        publicPath: '/',
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(port) : undefined,
});
