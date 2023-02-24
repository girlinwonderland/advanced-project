import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator';
import { StoreDecorator } from 'shared';
import { Navbar } from './Navbar';

export default {
    title: 'Widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ETheme.Dark), StoreDecorator({ user: { authData: undefined } })];

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ user: { authData: { id: '1', username: 'user' } } })];

export const LogOut = Template.bind({});
LogOut.args = {};
LogOut.decorators = [StoreDecorator({ user: { authData: { id: '1', username: 'user' } } })];

export const LogOutDark = Template.bind({});
LogOutDark.args = {};
LogOutDark.decorators = [ThemeDecorator(ETheme.Dark), StoreDecorator({ user: { authData: { id: '1', username: 'user' } } })];
