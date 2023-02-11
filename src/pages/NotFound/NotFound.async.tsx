import { lazy } from 'react';

export const NotFoundPageAsync = lazy(() => import('./NotFound')
    .then((module) => ({ default: module.NotFound })));
