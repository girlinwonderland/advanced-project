import React, { useCallback, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, classNames, EButtonTheme } from 'shared';
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
            <div className={classNames(styles.navbar, {}, [className])}>
                <Button
                    onClick={onLogout}
                    theme={EButtonTheme.ClearInverted}
                    className={styles.links}
                >
                    {t('logout')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button
                onClick={onOpen}
                theme={EButtonTheme.ClearInverted}
                className={styles.links}
            >
                {t('enter')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
        </div>
    );
});
