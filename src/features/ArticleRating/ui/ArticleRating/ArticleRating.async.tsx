import { lazy, Suspense } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleRatingProps } from './ArticleRating';

export const ArticleRatingLazy = lazy(() => import('./ArticleRating')
    .then((module) => ({ default: module.ArticleRating })));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
