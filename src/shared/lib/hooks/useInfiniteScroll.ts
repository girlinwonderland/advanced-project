import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
    /** Функция для выполнения */
    callback?: () => void;
    /** Ссылка на элемент, который отслеживаем */
    triggerRef: MutableRefObject<HTMLElement>;
    /** Ссылка на область в которой находится отслеживаемый элемент (viewport) */
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, wrapperRef, triggerRef }: UseInfiniteScrollOptions) {
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        let observer: IntersectionObserver | null = null;

        if (callback) {
            const options = {
                /** Область в которой находится отслеживаемый элемент (viewport) */
                root: wrapperElement,
                /** отступы вокруг root */
                rootMargin: '0px',
                /** число или массив чисел, указывающий допустимый процент пересечения target и root */
                threshold: 1.0,
            };

            /** Аргументы в функции 1. entries - массив изменений наблюдаемых элементов.
             *         // entry (запись) - изменение
             *         //   entry.boundingClientRect
             *         //   entry.intersectionRatio
             *         //   entry.intersectionRect
             *         //   entry.isIntersecting
             *         //   entry.rootBounds
             *         //   entry.target
             *         //   entry.time
             * В нашем случае берем самое первое изменение. Так как следим лишь за 1 элементом
             * Есть еще второй аргумент, у нас опущен */
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
