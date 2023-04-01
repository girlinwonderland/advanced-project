import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInit';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch';
import { Page } from 'widgets/Page/Page';
import { ArticleList } from 'entities/Article';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { ArticleSliceReducer, getArticles } from '../model/slices/articlesPageSlice';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../model/selectors';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: ArticleSliceReducer,
};

export const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
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
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={styles.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
});
