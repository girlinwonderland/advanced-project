import {
    memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInit';
import { TestProps } from 'shared/types/tests';
import { useLocation } from 'react-router-dom';
import { getScrollByPath, ScrollActions } from 'features/SaveScroll';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
import styles from './Page.module.scss';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}
export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: any) => {
        dispatch(ScrollActions.setScroll({ position: e.currentTarget.scrollTop, path: pathname }));
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(styles.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? <div className={styles.trigger} ref={triggerRef} /> : null}
        </main>
    );
});
