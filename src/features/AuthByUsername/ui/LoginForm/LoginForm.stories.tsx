import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared';
import { EErrors } from 'app/providers/StoreProvider';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({ login: { username: 'admin', password: '123', isLoading: false } })];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    login: {
        username: 'admin', password: '123', error: EErrors.IncorrectData, isLoading: false, 
    }, 
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({ login: { username: 'admin', password: '123', isLoading: true } })];
