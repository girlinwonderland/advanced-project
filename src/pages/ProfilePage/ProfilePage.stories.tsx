import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared';
import { ETheme } from 'shared/const';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfilePage } from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 24,
            country: Country.Armenia,
            lastname: 'k',
            first: 'asd',
            city: 'asf',
            currency: Currency.EUR,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ETheme.Dark), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 24,
            country: Country.Armenia,
            lastname: 'k',
            first: 'asd',
            city: 'asf',
            currency: Currency.EUR,
        },
    },
})];
