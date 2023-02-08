import { FC, useCallback, useState } from 'react';
import { classNames, Button } from 'shared';
import { ThemeSwitcher } from '../../../ThemeSwitcher/ui';
import { LangSwitcher } from '../../../LangSwitcher/ui/LangSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(true);
    const onToggle = useCallback(() => setCollapsed((prev) => !prev), [setCollapsed]);
    return (
        <div
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button onClick={onToggle}>toggle</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};
