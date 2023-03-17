import { memo } from 'react';
import { classNames } from 'shared';
import styles from './Text.module.scss';

export enum ETextType {
    Primary = 'primary',
    Error = 'error'
}

interface TextProps {
    className?: string,
    text?: string,
    title?: string,
    type?: ETextType,
}

export const Text = memo(({
    className, text, title, type = ETextType.Primary,
}: TextProps) => (
    <div className={classNames(styles.Text, { [styles[type]]: true }, [className])}>
        {title && <p className={styles.title}>{title}</p>}
        {text && <p className={styles.text}>{text}</p>}
    </div>
));
