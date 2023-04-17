import {
    useCallback, useEffect, useRef, useState, 
} from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay: number;
}

export const useModal = ({ onClose, isOpen, animationDelay }: UseModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setInterval>>();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
        return () => setIsMounted(false);
    }, [isOpen]);

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [onClose, animationDelay]);

    const oKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'escape') {
            close();
        }
    }, [close]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', oKeyDown);
        }
        return () => {
            clearInterval(timeRef.current);
            window.removeEventListener('keydown', oKeyDown);
        };
    }, [isOpen, oKeyDown]);

    return {
        isClosing,
        isMounted,
        close,
    };
};
