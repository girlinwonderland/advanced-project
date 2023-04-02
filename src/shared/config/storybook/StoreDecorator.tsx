import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers';
import { LoginReducer } from 'features/AuthByUsername';
import { ProfileReducer } from 'entities/Profile';
import { ArticleReducer } from 'entities/Article';
import { AddCommentFormReducer } from 'features/AddCommentForm';
import { ArticleSliceReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { ArticleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { ReducerList } from '../../lib';

const defaultAsyncReducer: ReducerList = {
    login: LoginReducer,
    profile: ProfileReducer,
    articleDetails: ArticleReducer,
    addCommentForm: AddCommentFormReducer,
    articleDetailsPage: ArticleDetailsPageReducer,
    articlesPage: ArticleSliceReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initState={state} asyncReducers={{ ...asyncReducers, ...defaultAsyncReducer }}>
        <StoryComponent />
    </StoreProvider>
);
