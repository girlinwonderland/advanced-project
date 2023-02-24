import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initState={state}>
        <StoryComponent />
    </StoreProvider>
);
