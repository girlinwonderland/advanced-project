import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '../../../../lib/classNames';
import { DropdownDirection } from '../../../../types';
import popupStyle from '../../styles/styles.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import styles from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const {
        className, trigger, direction = 'bottom right', children,
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(styles.Popover, {}, [className, popupStyle.popup])}
        >
            <HPopover.Button className={popupStyle.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(styles.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
