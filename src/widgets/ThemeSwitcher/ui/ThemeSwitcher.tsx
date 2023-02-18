import { FC } from 'react';
import { classNames, Button, EButtonTheme } from 'shared';
import { useTheme, ETheme } from 'app/providers';
import SwitchIcon from '../../../shared/assets/icons/theme-switcher.svg';
// import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
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
};
