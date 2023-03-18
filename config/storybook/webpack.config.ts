import path from 'path';
import webpack, { RuleSetRule, DefinePlugin } from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: {config: webpack.Configuration }) => {
    config.resolve!.modules!.push(path.resolve(__dirname, '..', '..', 'src'));
    config.resolve!.extensions!.push('.ts', '.tsx');
    // @ts-ignore
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module!.rules.push(buildCssLoaders(true));
    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
    }));
    return config;
};
