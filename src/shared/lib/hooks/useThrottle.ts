import { useCallback, useRef } from 'react';

type TCallbackFn = (...args: any[]) => void;

/** Хук который выполняет функцию раз в заданный промежуток времени */
export const useThrottle = (callback: TCallbackFn, delay: number) => {
    const throttleRef = useRef(false);

    return useCallback((...args: any[]) => {
        if (!throttleRef.current) {
            callback(...args);
            throttleRef.current = true;
            setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay, throttleRef]);
};
