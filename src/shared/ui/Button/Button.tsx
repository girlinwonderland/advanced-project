import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared';
import styles from './Button.module.scss';

export enum EButtonTheme {
    Clear = 'clear',
    OutLine = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: EButtonTheme
}

export const Button: FC<ButtonProps> = ({
    className, theme, children, onClick, ...otherProps
}) => (
    <button
        type="button"
        onClick={onClick}
        className={classNames(styles.Button, {}, [className, styles[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);
