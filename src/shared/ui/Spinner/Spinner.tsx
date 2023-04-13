import { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import './Spinner.scss';

interface LoadingProps {
    className?: string
}

export const Spinner = memo(({ className }: LoadingProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
));
