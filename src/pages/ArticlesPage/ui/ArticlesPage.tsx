import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInit';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch';
import { Page } from 'widgets/Page/Page';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { ArticleSliceReducer } from '../model/slices/articlesPageSlice';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from './ArticleInfiniteList';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: ArticleSliceReducer,
};

export const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(styles.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList className={styles.list} />
            </Page>
        </DynamicModuleLoader>
    );
});
