import {
    FC, ReactNode, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useTheme } from 'app/providers';
import { classNames, TMode } from '../../lib/classNames';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string,
    isOpen?: boolean,
    onClose: () => void,
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
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setInterval>>();
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
        return () => setIsMounted(false);
    }, [isOpen]);

    const onCloseWrapper = useCallback(() => {
        setIsClosing(true);
        timeRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    }, [onClose]);

    const mods: TMode = useMemo(() => ({
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
        (lazy && !isMounted) ? null : (
            <Portal>
                <div className={classNames(styles.Modal, mods, [className, theme, 'app_modal'])}>
                    <div className={styles.overlay} onClick={onCloseWrapper}>
                        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                            { children }
                        </div>
                    </div>
                </div>
            </Portal>
        )
    );
};
