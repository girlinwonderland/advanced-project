import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { NotFound } from './NotFound';

export default {
    title: 'Pages/NotFound',
    component: NotFound,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound {...args} />;

export const Dark = Template.bind({});

Dark.args = {};

Dark.decorators = [ThemeDecorator(ETheme.Dark)];

export const Light = Template.bind({});
Light.args = {};
