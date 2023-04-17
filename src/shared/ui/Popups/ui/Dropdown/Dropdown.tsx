import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '../../../../lib/classNames';
import { DropdownDirection } from '../../../../types';
import { AppLink } from '../../../AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupStyles from '../../styles/styles.module.scss';
import styles from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    direction?: DropdownDirection;
    trigger: ReactNode;
}

export function Dropdown(props: DropdownProps) {
    const {
        className, trigger, items, direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(styles.Dropdown, {}, [className, popupStyles.popup])}>
            <Menu.Button className={popupStyles.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(styles.menu, {}, menuClasses)}>
                {items.map((item, i) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(styles.item, { [popupStyles.active]: active })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item key={item.href} as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item key={i} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
