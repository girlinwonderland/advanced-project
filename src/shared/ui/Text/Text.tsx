import { memo, useMemo } from 'react';
import { classNames } from '../../lib/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
    Primary = 'primary',
    Inverted = 'inverted',
    Error = 'error',
}

export enum ETextType {
    Primary = 'primary',
    Error = 'error'
}

export enum TextAlign {
    Right = 'right',
    Left = 'left',
    Center = 'center',
}

export enum ETextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string,
    theme?: TextTheme;
    text?: string,
    title?: string,
    type?: ETextType,
    align?: TextAlign,
    size?: ETextSize,
}

export const Text = memo(({
    className, text, title,
    type = ETextType.Primary,
    size = ETextSize.M,
    align = TextAlign.Left,
    theme = TextTheme.Primary,
}: TextProps) => {
    const classMode = useMemo(() => ({
        [styles[type]]: true, [styles[align]]: true, [styles[size]]: true, [styles[theme]]: true,
    }), [type, align, size, theme]);
    return (
        <div className={classNames(styles.Text, classMode, [className])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
});
