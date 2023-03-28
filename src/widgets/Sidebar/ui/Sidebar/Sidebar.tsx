import { memo, useCallback, useState } from 'react';
import {
    classNames, Button,
    EButtonTheme, ButtonSize,
} from 'shared';
import { useSelector } from 'react-redux';
import { ThemeSwitcher } from '../../../ThemeSwitcher/ui';
import { LangSwitcher } from '../../../LangSwitcher/ui/LangSwitcher';
import { getSidebarItems } from '../../model/selectors';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItems = useSelector(getSidebarItems);
    const onToggle = useCallback(() => setCollapsed((prev) => !prev), [setCollapsed]);
    return (
        <menu
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapseBtn}
                theme={EButtonTheme.BackgroundInverted}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                { sidebarItems.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                )) }
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} short={collapsed} />
            </div>
        </menu>
    );
});
