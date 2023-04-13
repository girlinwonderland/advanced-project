import React, {
    useCallback, useState, memo, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { RoutPath } from 'shared/config/routeConfig';
import { AppLink, ELinkTheme } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Dropdown, DropdownItem } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { LoginModal } from 'features/AuthByUsername';
import {
    getUserAuth, UserActions, isUserAdmin, isUserManager,
} from 'entities/User';
import styles from './Navbar.module.scss';

interface NavBarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuth);

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const dispatch = useDispatch();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onOpen = useCallback(() => setIsAuthModal(true), []);

    const onClose = useCallback(() => setIsAuthModal(false), []);

    const onLogout = useCallback(() => {
        setIsAuthModal(false);
        dispatch(UserActions.logout());
    }, [dispatch]);

    const dropDownItems: DropdownItem[] = useMemo(() => {
        const items: DropdownItem[] = [{
            content: t('logout'),
            onClick: onLogout,
        }];
        if (authData) {
            items.push({
                content: t('profile'),
                href: RoutPath.profile + authData.id,
            });
        }
        if (isAdmin || isManager) {
            items.push({
                content: t('admin'),
                href: RoutPath.admin_panel,
            });
        }
        return items;
    }, [onLogout, authData, t, isAdmin, isManager]);

    if (authData) {
        return (
            <header className={classNames(styles.navbar, {}, [className])}>
                <Text
                    className={styles.appName}
                    title={t('Ulbi TV App')}
                    theme={TextTheme.Inverted}
                />
                <AppLink
                    to={RoutPath.article_create}
                    theme={ELinkTheme.Secondary}
                    className={styles.createBtn}
                >
                    {t('createArticle')}
                </AppLink>
                <Dropdown
                    direction="bottom left"
                    className={styles.dropdown}
                    items={dropDownItems}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                />
            </header>
        );
    }

    return (
        <header className={classNames(styles.navbar, {}, [className])}>
            <Button
                onClick={onOpen}
                theme={EButtonTheme.ClearInverted}
                className={styles.links}
            >
                {t('enter')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
        </header>
    );
});
