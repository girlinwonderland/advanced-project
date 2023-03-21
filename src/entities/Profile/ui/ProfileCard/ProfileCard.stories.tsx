import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 24,
        country: Country.Armenia,
        lastname: 'k',
        first: 'asd',
        city: 'asf',
        currency: Currency.EUR,
        avatar: 'static/media/src/shared/assets/test/storybook.jpg',
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
