import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, EErrors } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuth } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors';
import { fetchComments } from 'pages/ArticleDetailsPage/model/services/fetchComments';

export const addComments = createAsyncThunk<Comment, string, ThunkConfig<EErrors>>(
    'page/addComment',
    async (text, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch, 
        } = thunkApi;

        const userData = getUserAuth(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue(EErrors.IncorrectData);
        }
        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });
            if (!response.data) {
                throw new Error();
            }
            dispatch(fetchComments(article.id));
            return response.data;
        } catch (e) {
            return rejectWithValue(EErrors.IncorrectData);
        }
    },
);
