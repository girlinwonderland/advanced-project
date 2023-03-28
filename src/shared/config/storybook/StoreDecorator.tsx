import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers';
import { LoginReducer } from 'features/AuthByUsername';
import { ProfileReducer } from 'entities/Profile';
import { ArticleReducer } from 'entities/Article';
import { AddCommentFormReducer } from 'features/AddCommentForm';
import { ArticleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { ArticleSliceReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { ReducerList } from '../../lib';

const defaultAsyncReducer: ReducerList = {
    login: LoginReducer,
    profile: ProfileReducer,
    articleDetails: ArticleReducer,
    addCommentForm: AddCommentFormReducer,
    articleDetailsComments: ArticleDetailsCommentsReducer,
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
