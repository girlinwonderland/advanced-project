import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import styles from './Loading.module.scss';

interface LoadingProps {
    className?: string
}

export const Loading: FC<LoadingProps> = ({ className }) => (
    <div className={classNames(styles.Loading, {}, [className])}>
        <Spinner />
    </div>
);
