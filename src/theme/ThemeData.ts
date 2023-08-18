export interface ThemeProps {
    isDarkTheme: boolean;
    colors: {
        primary: string;
        neutral: string;
    };
}

export const DarkTheme: ThemeProps = {
    isDarkTheme: true,
    colors: {
        primary: '#1D3CA0',
        neutral: '#121212',
    },
};

export const LightTheme: ThemeProps = {
    isDarkTheme: false,
    colors: {
        primary: '#1D3CA0',
        neutral: '#121212',
    },
};
