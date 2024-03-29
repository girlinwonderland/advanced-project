import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { useTheme } from 'shared/lib/hooks/useTheme';
import { ETheme } from 'shared/const';
import SwitchIcon from 'shared/assets/icons/theme-switcher.svg';
// import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={EButtonTheme.Clear}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            <SwitchIcon fill={theme === ETheme.Light ? '#FFC700' : '#0115C6'} />
        </Button>
    );
});
