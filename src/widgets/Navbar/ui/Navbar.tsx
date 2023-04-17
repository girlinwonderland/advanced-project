import React, { useCallback, useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { RoutPath } from 'shared/config/routeConfig';
import { AppLink, ELinkTheme } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { HStack } from 'shared/ui/Stack';
import { AvatarDropdown } from 'features/AvatarDropdown';
import { NotificationButton } from 'features/NotificationButton';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuth } from 'entities/User';
import styles from './Navbar.module.scss';

interface NavBarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuth);

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onOpen = useCallback(() => setIsAuthModal(true), []);

    const onClose = useCallback(() => setIsAuthModal(false), []);

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
                <HStack gap="16" className={styles.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
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
