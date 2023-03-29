import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInit } from '../selectors';
import { ArticleSliceActions } from '../slices/articlesPageSlice';
import { fetchArticles } from './fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { dispatch, getState } = thunkApi;
        const isInited = getArticlesPageInit(getState());

        if (!isInited) {
            dispatch(ArticleSliceActions.initState());
            dispatch(fetchArticles({ page: 1 }));
        }
    },
);
