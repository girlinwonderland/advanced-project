import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutPath } from 'shared/config/routeConfig';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors';
import styles from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutPath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutPath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(styles.ArticleDetailsPageHeader, {}, [className])}>
            <Button theme={EButtonTheme.OutLine} onClick={onBackToList}>
                {t('back to list')}
            </Button>
            {canEdit && (
                <Button
                    className={styles.editBtn}
                    theme={EButtonTheme.OutLine}
                    onClick={onEditArticle}
                >
                    {t('edit')}
                </Button>
            )}
        </div>
    );
});
