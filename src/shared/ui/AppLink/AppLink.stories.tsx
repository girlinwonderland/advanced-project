import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from '../../const';
import { ThemeDecorator } from '../../config/storybook/themeDecorator';
import { AppLink, ELinkTheme } from './index';

export default {
    title: 'Shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
    theme: ELinkTheme.Primary,
};

export const PrimaryBlack = Template.bind({});
PrimaryBlack.args = {
    children: 'text',
    theme: ELinkTheme.Primary,
};
PrimaryBlack.decorators = [ThemeDecorator(ETheme.Dark)];

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'text',
    theme: ELinkTheme.Secondary,
};

export const SecondaryBlack = Template.bind({});
SecondaryBlack.args = {
    children: 'text',
    theme: ELinkTheme.Secondary,
};

SecondaryBlack.decorators = [ThemeDecorator(ETheme.Dark)];
