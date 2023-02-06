import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared';
import { ThemeSwitcher } from '../../../ThemeSwitcher/ui';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(true);
    const onToggle = useCallback(() => setCollapsed(prev => !prev), [setCollapsed]);
    return (
        <div
            className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}
