import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { getArticlesPageInit } from '../selectors';
import { ArticleSliceActions } from '../slices/articlesPageSlice';
import { fetchArticles } from './fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (searchParams, thunkApi) => {
        const { dispatch, getState } = thunkApi;
        const isInited = getArticlesPageInit(getState());

        if (!isInited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const searchType = searchParams.get('type') as ArticleType;
            if (orderFromUrl) {
                dispatch(ArticleSliceActions.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(ArticleSliceActions.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(ArticleSliceActions.setSearch(searchFromUrl));
            }
            if (searchType) {
                dispatch(ArticleSliceActions.setType(searchType));
            }
            dispatch(ArticleSliceActions.initState());
            dispatch(fetchArticles({}));
        }
    },
);
