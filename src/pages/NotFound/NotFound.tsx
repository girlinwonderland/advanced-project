import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared';
import styles from './NotFound.module.scss';

interface NotFoundProps {
    className?: string
}

export const NotFound: FC<NotFoundProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.NotFound, {}, [className])}>
            {t('not found')}
        </div>
    );
};
