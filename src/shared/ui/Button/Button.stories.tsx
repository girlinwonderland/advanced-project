import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers';
import { Button, EButtonTheme } from './Button';
import { ThemeDecorator } from '../../config/storybook/themeDecorator';

export default {
    title: 'Shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    theme: EButtonTheme.Clear,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'text',
    theme: EButtonTheme.OutLine,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'text',
    theme: EButtonTheme.OutLine,
};

OutlineDark.decorators = [ThemeDecorator(ETheme.Dark)];
