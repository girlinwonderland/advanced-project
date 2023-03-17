import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared';
import styles from './NotFound.module.scss';

interface NotFoundProps {
    className?: string
}

export const NotFound = memo(({ className }: NotFoundProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.NotFound, {}, [className])}>
            {t('not found')}
        </div>
    );
});
