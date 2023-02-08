import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared';
import styles from './AppLink.module.scss';

export enum ELinkTheme {
    Primary = 'primary',
    Secondary = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: ELinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
    className, children, to, theme = ELinkTheme.Secondary, ...otherProps
}) => (
    <Link
        className={classNames(styles.AppLink, {}, [className, styles[theme]])}
        to={to}
        {...otherProps}
    >
        {children}
    </Link>
);
