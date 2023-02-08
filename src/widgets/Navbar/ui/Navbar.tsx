import React, { FC } from 'react';
import { AppLink, classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import styles from './navbar.module.scss';

interface NavBarProps {
    className?: string
}

export const Navbar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to="/" className={styles.mainLink}>{t('mainLink')}</AppLink>
                <AppLink to="/about">{t('aboutLink')}</AppLink>
            </div>
        </div>
    );
};
