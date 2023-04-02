import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch, useInitialEffect } from 'shared/lib';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { RoutPath } from 'shared/config/routeConfig';
import { Page } from 'widgets/Page/Page';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ETextSize, Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import { getArticleRecommendations } from '../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleCommentsIsLoading, getArticleRecommendationsIsLoading } from '../model/selectors';
import { addComments } from '../model/services/addComment';
import { fetchComments } from '../model/services/fetchComments';
import { fetchRecommendations } from '../model/services/fetchReccomendations';
import { ArticleDetailsPageReducer } from '../model/slices';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsPage: ArticleDetailsPageReducer,
};

export const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutPath.articles);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchComments(id));
        dispatch(fetchRecommendations());
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addComments(text));
    }, [dispatch]);

    if (!id) {
        return (
            <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
                {t('error_not_found')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
                <Button theme={EButtonTheme.OutLine} onClick={onBackToList}>
                    {t('back to list')}
                </Button>
                <ArticleDetails id={id} />
                <Text
                    size={ETextSize.L}
                    className={styles.commentTitle}
                    title={t('recommends')}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={styles.recommendations}
                    target="_blank"
                />
                <Text className={styles.commentTitle} title={t('comments')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </Page>
        </DynamicModuleLoader>
    );
});
