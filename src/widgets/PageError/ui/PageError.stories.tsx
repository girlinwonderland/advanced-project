import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { ETheme } from 'shared/const';
import { PageError } from './PageError';

export default {
    title: 'Widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Dark = Template.bind({});

Dark.args = {};

Dark.decorators = [ThemeDecorator(ETheme.Dark)];

export const Light = Template.bind({});
Light.args = {};
