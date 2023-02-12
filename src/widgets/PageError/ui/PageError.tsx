import { FC } from 'react';
import { Button, classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const updatePage = () => {
        location.reload();
    };

    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <p>{t('error')}</p>
            <Button onClick={updatePage}>
                {t('update error')}
            </Button>
        </div>
    );
};
