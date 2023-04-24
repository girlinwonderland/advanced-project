import { addDecorator } from '@storybook/react';
import {
    RouteDecorator, StyleDecorator, ThemeDecorator, SuspenseDecorator, ETheme,
} from '../../src/shared';

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
addDecorator(SuspenseDecorator);
