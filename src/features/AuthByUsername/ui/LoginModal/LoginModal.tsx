import { FC } from 'react';
import { classNames, Modal } from 'shared';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string,
    onClose: () => void,
    isOpen: boolean,
}

export const LoginModal: FC<LoginModalProps> = ({
    className,
    onClose,
    isOpen,
}) => (
    <Modal
        onClose={onClose}
        isOpen={isOpen}
        className={classNames(styles.LoginModal, {}, [className])}
        lazy
    >
        <LoginForm />
    </Modal>
);
