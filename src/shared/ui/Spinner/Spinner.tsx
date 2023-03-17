import { memo } from 'react';
import { classNames } from 'shared';
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
