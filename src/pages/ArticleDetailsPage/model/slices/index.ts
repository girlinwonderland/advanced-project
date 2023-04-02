import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import {
    ArticleDetailsPageRecommendationsReducer,
} from './articleDetailsPageRecommendationsSlice';
import { ArticleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const ArticleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: ArticleDetailsPageRecommendationsReducer,
    comments: ArticleDetailsCommentsReducer,
});
