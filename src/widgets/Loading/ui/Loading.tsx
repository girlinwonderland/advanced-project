import { FC } from 'react';
import { classNames, Spinner } from 'shared';
import styles from './Loading.module.scss';

interface LoadingProps {
    className?: string
}

export const Loading: FC<LoadingProps> = ({ className }) => (
    <div className={classNames(styles.Loading, {}, [className])}>
        <Spinner />
    </div>
);
