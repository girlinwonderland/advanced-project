import { lazy } from 'react';

export const ArticlesEditPageAsync = lazy(() => import('./ArticleEditPage')
    .then((module) => ({ default: module.ArticleEditPage })));
