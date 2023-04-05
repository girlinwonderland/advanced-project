import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETextSize, ETextType, Text } from './Text';

export default {
    title: 'Shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title...',
    text: 'text...',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'some title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'some text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'title...',
    text: 'text...',
    type: ETextType.Error,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: ETextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: ETextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: ETextSize.S,
};
