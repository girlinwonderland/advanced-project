import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers';
import { LoginReducer } from 'features/AuthByUsername';
import { ProfileReducer } from 'entities/Profile';
import { ArticleReducer } from 'entities/Article';
import { ReducerList } from '../../lib';

const defaultAsyncReducer: ReducerList = {
    login: LoginReducer,
    profile: ProfileReducer,
    articleDetails: ArticleReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initState={state} asyncReducers={{ ...asyncReducers, ...defaultAsyncReducer }}>
        <StoryComponent />
    </StoreProvider>
);
