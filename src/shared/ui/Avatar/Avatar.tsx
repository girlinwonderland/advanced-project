import { CSSProperties, useMemo } from 'react';
import { classNames, TMode } from 'shared/lib/classNames/classNames';
import style from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({
    className, src, size = 100, alt,
}: AvatarProps) => {
    const mods: TMode = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(style.Avatar, mods, [className])}
        />
    );
};
