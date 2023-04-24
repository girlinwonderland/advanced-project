import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const {
        className, Svg, inverted, ...otherProps 
    } = props;

    return (
        <Svg
            {...otherProps}
            className={classNames(inverted ? styles.inverted : styles.Icon, {}, [className])}
        />
    );
});
