import { useCallback, useContext } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        const newTheme: ETheme = theme === ETheme.Light ? ETheme.Dark : ETheme.Light;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, [theme]);

    return {
        theme,
        toggleTheme,
    };
};
