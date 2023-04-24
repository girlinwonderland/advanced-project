import { useCallback, useContext } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY } from '../../const';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        let newTheme: ETheme;
        switch (theme) {
        case ETheme.Dark:
            newTheme = ETheme.Light;
            break;
        case ETheme.Light:
            newTheme = ETheme.Orange;
            break;
        case ETheme.Orange:
            newTheme = ETheme.Dark;
            break;
        default:
            newTheme = ETheme.Light;
        }
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, [theme, setTheme]);

    return {
        theme,
        toggleTheme,
    };
};
