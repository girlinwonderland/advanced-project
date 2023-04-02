import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { Article } from 'entities/Article';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean,
    error?: string
}

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
}

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
