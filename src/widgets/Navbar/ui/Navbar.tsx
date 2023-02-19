import React, { FC, useState } from 'react';
import {
    Button, classNames, EButtonTheme, Modal,
} from 'shared';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavBarProps {
    className?: string
}

export const Navbar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button
                onClick={() => setIsAuthModal(true)}
                theme={EButtonTheme.ClearInverted}
                className={styles.links}
            >
                {t('enter')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
                loren vdshv svbdsjhshfdshgfyydy fgghdgfhghdgfhdgfdgh
                bfbhdgfhdgfhd dfjhfjdhfjdhfjdhfjd dfdjhfjdjfndjf fhdfjdh
                jdfhjfhjdhfdf dfjdjfkdjf dfkjdfjdf hdufhdjhfjdfhdfh
            </Modal>
        </div>
    );
};
