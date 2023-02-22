import { createContext } from 'react';

export enum ETheme {
    Dark= 'app_dark_theme',
    Light = 'app_light_theme'
}

export interface IContext {
    theme: ETheme,
    setTheme: (p: ETheme) => void
}

export const ThemeContext = createContext<IContext>({ theme: ETheme.Light, setTheme: () => {} });

export const LOCAL_STORAGE_THEME_KEY = 'theme';
