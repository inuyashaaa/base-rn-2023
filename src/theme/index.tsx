import React, { useEffect, useCallback, useState, createContext } from 'react';
import { storage } from '@app/storage';
import { LightTheme, DarkTheme, ThemeProps } from './ThemeData';

const THEME_SELECTED = 'THEME_SELECTED';

export interface IThemeContext {
    theme: ThemeProps;
    updateTheme: (_value: boolean) => void;
}

export const ThemeContext = createContext<IThemeContext>({
    theme: LightTheme,
    updateTheme: () => {},
});

const CustomThemeProvider = (props: any) => {
    const [theme, setTheme] = useState(LightTheme);

    const initThemeFromStorage = useCallback(async () => {
        const oldTheme = (await storage.getString(THEME_SELECTED)) || '';
        setTheme(oldTheme === 'dark' ? DarkTheme : LightTheme);
    }, [setTheme]);

    useEffect(() => {
        initThemeFromStorage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                updateTheme: (isDarkTheme: boolean) => {
                    setTheme(isDarkTheme ? DarkTheme : LightTheme);
                    storage.set(THEME_SELECTED, isDarkTheme ? 'dark' : 'light');
                },
            }}>
            {props?.children}
        </ThemeContext.Provider>
    );
};

export default CustomThemeProvider;
