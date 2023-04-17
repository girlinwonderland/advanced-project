import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames(styles.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={(
                <Button theme={EButtonTheme.Clear}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            )}
        >
            <NotificationList className={styles.notifications} />
        </Popover>
    );
});
