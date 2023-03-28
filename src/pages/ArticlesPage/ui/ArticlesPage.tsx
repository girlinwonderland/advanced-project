import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInit';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch';
import { Page } from 'shared/ui/Page/Page';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { fetchArticles } from '../model/services/fetchArticlesList';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { ArticleSliceReducer, ArticleSliceActions, getArticles } from '../model/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../model/selectors';
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
    const error = useSelector(getArticlesPageError);

    const onChangeView = useCallback((view: ArticleView) => dispatch(ArticleSliceActions.setView(view)), [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(ArticleSliceActions.initState());
        dispatch(fetchArticles({ page: 1 }));
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(styles.ArticlesPage, {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
});
