import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, EErrors } from 'app/providers/StoreProvider';
import { Article } from '../types';

export const fetchArticleData = createAsyncThunk<Article, string, ThunkConfig<EErrors>>(
    'profile/fetchProfileData',
    async (id, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<Article>(`/articles/${id}`, {
                params: {
                    _expand: 'user',
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
