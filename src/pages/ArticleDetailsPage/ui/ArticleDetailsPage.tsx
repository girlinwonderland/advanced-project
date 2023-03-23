import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

export const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
                {t('error_not_found')}
            </div>
        );
    }

    return (
        <div className={classNames(styles.ArticlesPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
});
