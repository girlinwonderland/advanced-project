import { CSSProperties, useMemo } from 'react';
import { classNames, TMode } from 'shared/lib/classNames/classNames';
import { AppImage } from 'shared/ui/AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton/Skeleton';
import style from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = ({
    className, src, size = 100, alt, fallbackInverted,
}: AvatarProps) => {
    const mods: TMode = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(style.Avatar, mods, [className])}
        />
    );
};
