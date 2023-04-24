import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { ETheme } from 'shared/const';
import { About } from './About';

export default {
    title: 'Pages/About',
    component: About,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About />;

export const Dark = Template.bind({});

Dark.args = {};

Dark.decorators = [ThemeDecorator(ETheme.Dark)];

export const Light = Template.bind({});
Light.args = {};
