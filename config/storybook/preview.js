import { addDecorator } from '@storybook/react';
import { RouteDecorator, StyleDecorator, ThemeDecorator } from '../../src/shared';
import { ETheme } from '../../src/app/providers';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(ETheme.Light));
addDecorator(RouteDecorator);
