import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuth } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments.error;

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations?.isLoading;
};

export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations?.error;
};

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getUserAuth,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);
