import { ButtonHTMLAttributes, memo } from 'react';
import { classNames, TMode } from '../../lib/classNames';
import styles from './Button.module.scss';

export enum EButtonTheme {
    Clear = 'clear',
    OutLine = 'outline',
    Background = 'background',
    BackgroundInverted = 'backgroundInverted',

    ClearInverted = 'clearInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: EButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean,
    fullWidth?: boolean;
}

export const Button = memo(({
    className,
    theme = EButtonTheme.OutLine,
    children,
    onClick,
    square,
    size = ButtonSize.M,
    disabled,
    fullWidth,
    ...otherProps
}: ButtonProps) => {
    const mods: TMode = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
    };
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(styles.Button, mods, [className, styles[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
