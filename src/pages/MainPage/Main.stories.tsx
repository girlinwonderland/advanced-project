import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { Main } from './Main';

export default {
    title: 'Pages/Main',
    component: Main,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main />;

export const Dark = Template.bind({});

Dark.args = {};

Dark.decorators = [ThemeDecorator(ETheme.Dark)];

export const Light = Template.bind({});
Light.args = {};
