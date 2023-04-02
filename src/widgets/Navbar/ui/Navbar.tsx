import React, { useCallback, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
    AppLink, Button, classNames, EButtonTheme, ELinkTheme, RoutPath,
} from 'shared';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuth, UserActions } from 'entities/User';
import styles from './Navbar.module.scss';

interface NavBarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuth);

    const dispatch = useDispatch();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onOpen = useCallback(() => setIsAuthModal(true), []);

    const onClose = useCallback(() => setIsAuthModal(false), []);

    const onLogout = useCallback(() => {
        setIsAuthModal(false);
        dispatch(UserActions.logout());
    }, [dispatch]);

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
                    {t('Создать статью')}
                </AppLink>
                <Button
                    onClick={onLogout}
                    theme={EButtonTheme.ClearInverted}
                    className={styles.links}
                >
                    {t('logout')}
                </Button>
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
