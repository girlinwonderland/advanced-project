import { FC } from 'react';
import { classNames } from 'shared';
import './Spinner.scss';

interface LoadingProps {
    className?: string
}

export const Spinner: FC<LoadingProps> = ({ className }) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
