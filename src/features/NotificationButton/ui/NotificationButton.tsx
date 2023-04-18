import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    memo, useCallback, useMemo, useState,
} from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = useMemo(() => {
        return (
            <Button theme={EButtonTheme.Clear} onClick={onOpenDrawer}>
                <Icon Svg={NotificationIcon} inverted />
            </Button>
        );
    }, [onOpenDrawer]);

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(styles.NotificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={styles.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    );
});
