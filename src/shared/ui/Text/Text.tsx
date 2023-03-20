import { memo } from 'react';
import { classNames } from 'shared';
import styles from './Text.module.scss';

export enum ETextType {
    Primary = 'primary',
    Error = 'error'
}

export enum TextAlign {
    Right = 'right',
    Left = 'left',
    Center = 'center',
}

interface TextProps {
    className?: string,
    text?: string,
    title?: string,
    type?: ETextType,
    align?: TextAlign,
}

export const Text = memo(({
    className, text, title, type = ETextType.Primary, align = TextAlign.Left,
}: TextProps) => (
    <div className={classNames(styles.Text, { [styles[type]]: true, [styles[align]]: true }, [className])}>
        {title && <p className={styles.title}>{title}</p>}
        {text && <p className={styles.text}>{text}</p>}
    </div>
));
