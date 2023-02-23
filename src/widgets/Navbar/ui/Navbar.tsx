import React, { FC, useCallback, useState } from 'react';
import { Button, classNames, EButtonTheme } from 'shared';
import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavBarProps {
    className?: string
}

export const Navbar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onOpen = useCallback(() => setIsAuthModal(true), []);

    const onClose = useCallback(() => setIsAuthModal(false), []);

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button
                onClick={onOpen}
                theme={EButtonTheme.ClearInverted}
                className={styles.links}
            >
                {t('enter')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onClose} />
        </div>
    );
};
