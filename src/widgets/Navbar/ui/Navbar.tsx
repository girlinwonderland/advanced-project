import React, { FC } from 'react';
import { AppLink, classNames } from 'shared';
import styles from './navbar.module.scss';

interface NavBarProps {
    className?: string
}

export const Navbar: FC<NavBarProps> = ({ className }) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to='/' className={styles.mainLink}>Главная</AppLink>
                <AppLink to='/about'>О сайте</AppLink>
            </div>
        </div>
    )
}
