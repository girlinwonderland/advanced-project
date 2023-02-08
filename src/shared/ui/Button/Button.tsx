import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared';
import styles from './Button.module.scss';

export enum EButtonTheme {
    Clear = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: EButtonTheme
}

export const Button: FC<ButtonProps> = ({
    className, theme, children, onClick,
}) => (
    <button
        type="button"
        onClick={onClick}
        className={classNames(styles.Button, {}, [className, styles[theme]])}
    >
        {children}
    </button>
);
