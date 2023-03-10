import React, { useMemo, useState } from 'react';
import {
    ETheme, IContext, ThemeContext, LOCAL_STORAGE_THEME_KEY,
} from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.Light;

interface IThemeProvider {
    initialTheme?: ETheme
}

export const ThemeProvider: React.FC<IThemeProvider> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<ETheme>(initialTheme || defaultTheme);

    const contextValue: IContext = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
