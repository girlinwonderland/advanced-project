import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, EErrors } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchComments = createAsyncThunk<Comment[], string | undefined, ThunkConfig<EErrors>>(
    'page/fetchComments',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        if (!articleId) {
            return rejectWithValue(EErrors.IncorrectData);
        }
        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
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
