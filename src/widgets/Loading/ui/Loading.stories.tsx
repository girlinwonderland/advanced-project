import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { Loading } from './Loading';

export default {
    title: 'Widgets/Loading',
    component: Loading,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Dark = Template.bind({});

Dark.args = {};

Dark.decorators = [ThemeDecorator(ETheme.Dark)];

export const Light = Template.bind({});
Light.args = {};
