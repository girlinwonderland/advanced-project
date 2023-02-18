import React, { FC, useCallback, useState } from 'react';
import {
    classNames, Button, EButtonTheme,
    ButtonSize, AppLink, ELinkTheme,
    RoutPath,
} from 'shared';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import MainIcon from 'shared/assets/icons/home-icon.svg';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from '../../../ThemeSwitcher/ui';
import { LangSwitcher } from '../../../LangSwitcher/ui/LangSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = useCallback(() => setCollapsed((prev) => !prev), [setCollapsed]);
    const { t } = useTranslation();
    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapseBtn}
                theme={EButtonTheme.BackgroundInverted}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink
                    theme={ELinkTheme.Secondary}
                    to={RoutPath.main}
                    className={styles.item}
                >
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>{t('mainLink')}</span>
                </AppLink>
                <AppLink
                    theme={ELinkTheme.Secondary}
                    to={RoutPath.about}
                    className={styles.item}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>
                        {' '}
                        {t('aboutLink')}
                    </span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} short={collapsed} />
            </div>
        </div>
    );
};
