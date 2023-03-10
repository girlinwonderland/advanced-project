import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared';
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
    disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
    className,
    theme,
    children,
    onClick,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
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
};
