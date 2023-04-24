import { FC, ReactNode, useMemo } from 'react';
import { useTheme } from 'app/providers';
import { classNames, TMode } from '../../lib/classNames';
import { Portal } from '../Portal/Portal';
import { useModal } from '../../lib/hooks/useModal';
import { Overlay } from '../Overlay/Overlay';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean;
    children?: ReactNode
}

export const Modal: FC<ModalProps> = ({
    className,
    children,
    isOpen,
    onClose,
    lazy,
}) => {
    const { theme } = useTheme();

    const {
        close,
        isClosing,
        isMounted,
    } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });

    const mods: TMode = useMemo(() => ({
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    }), [isOpen, isClosing]);

    return (
        (lazy && !isMounted) ? null : (
            <Portal>
                <div className={classNames(styles.Modal, mods, [className, theme, 'app_modal'])}>
                    <Overlay onClick={close} />
                    <div className={styles.content}>
                        { children }
                    </div>
                </div>
            </Portal>
        )
    );
};
