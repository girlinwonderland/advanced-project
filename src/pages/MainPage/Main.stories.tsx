import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ETheme } from 'shared/const';
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

Dark.decorators = [ThemeDecorator(ETheme.Dark), StoreDecorator({})];

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];
