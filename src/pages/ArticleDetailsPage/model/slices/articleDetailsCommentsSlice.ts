import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types';
import { fetchComments } from '../services/fetchComments';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const CommentsSlice = createSlice({
    name: 'CommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: undefined,
        entities: {},
        ids: [],
        error: undefined,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchComments.fulfilled, (
                state,
                action: PayloadAction<Comment[]>,
            ) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: ArticleDetailsCommentsReducer } = CommentsSlice;
