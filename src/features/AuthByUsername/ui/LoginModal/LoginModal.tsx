import { FC, Suspense } from 'react';
import { classNames, Modal } from 'shared';
import { Loading } from 'widgets';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string,
    onClose: () => void,
    isOpen: boolean,
}

export const LoginModal: FC<LoginModalProps> = ({
    className = '',
    onClose,
    isOpen,
}) => (
    <Modal
        onClose={onClose}
        isOpen={isOpen}
        className={classNames(className, {}, [])}
        lazy
    >
        <Suspense fallback={<Loading />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);
