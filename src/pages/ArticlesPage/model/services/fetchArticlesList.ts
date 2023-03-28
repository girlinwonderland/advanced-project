import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, EErrors } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../selectors';

interface FetchArticlesListProps {
    page?: number;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<EErrors>>(
    'page/fetchArticles',
    async ({ page = 1 }, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const limit = getArticlesPageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue(EErrors.IncorrectData);
        }
    },
);
