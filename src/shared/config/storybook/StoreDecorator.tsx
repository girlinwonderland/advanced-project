import { Story } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers';
import { LoginReducer } from 'features/AuthByUsername';

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: LoginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initState={state} asyncReducers={{ ...asyncReducers, ...defaultAsyncReducer }}>
        <StoryComponent />
    </StoreProvider>
);
