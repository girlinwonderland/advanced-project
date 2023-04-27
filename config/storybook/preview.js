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
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ETheme.Light, color: '#ffffff' },
            { name: 'dark', class: ETheme.Dark, color: '#000000' },
            { name: 'orange', class: ETheme.Orange, color: '#ffb005' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(ETheme.Light));
addDecorator(RouteDecorator);
addDecorator(SuspenseDecorator);
