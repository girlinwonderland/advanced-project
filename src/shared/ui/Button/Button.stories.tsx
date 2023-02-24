import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers';
import { Button, EButtonTheme, ButtonSize } from './Button';
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

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'text',
    theme: EButtonTheme.ClearInverted,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'text',
    theme: EButtonTheme.OutLine,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: EButtonTheme.OutLine,
    size: ButtonSize.L,
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: 'Text',
    theme: EButtonTheme.OutLine,
    size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'text',
    theme: EButtonTheme.OutLine,
};

OutlineDark.decorators = [ThemeDecorator(ETheme.Dark)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: EButtonTheme.Background,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: EButtonTheme.BackgroundInverted,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: EButtonTheme.BackgroundInverted,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: EButtonTheme.BackgroundInverted,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children: '>',
    theme: EButtonTheme.BackgroundInverted,
    square: true,
    size: ButtonSize.XL,
};

export const disabled = Template.bind({});
disabled.args = {
    children: '>',
    theme: EButtonTheme.OutLine,
    disabled: true,
};
