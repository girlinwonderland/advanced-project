import {
    FC, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { classNames } from '../../lib/classNames';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string,
    isOpen?: boolean,
    onClose: () => void
}

export const Modal: FC<ModalProps> = ({
    className,
    children,
    isOpen,
    onClose,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setInterval>>();

    const onCloseWrapper = useCallback(() => {
        setIsClosing(true);
        timeRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    }, [onClose]);

    const mods: Record<string, boolean> = useMemo(() => ({
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    }), [isOpen, isClosing]);

    const oKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'escape') {
            onCloseWrapper();
        }
    }, [onCloseWrapper]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', oKeyDown);
        }
        return () => {
            clearInterval(timeRef.current);
            window.removeEventListener('keydown', oKeyDown);
        };
    }, [isOpen, oKeyDown]);

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className])}>
                <div className={styles.overlay} onClick={onCloseWrapper}>
                    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                        { children }
                    </div>
                </div>
            </div>
        </Portal>
    );
};
