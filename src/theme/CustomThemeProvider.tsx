import React, { ReactNode, useState } from 'react';
import { themeCreator } from './base';
import { ThemeProvider } from '@mui/material';

export const ThemeContext = React.createContext(
  (_themeName: string): void => {}
);

const CustomThemeProvider: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const curThemeName = localStorage.getItem('appTheme') ?? 'LightTheme';

  const [themeName, _setThemeName] = useState(curThemeName);

  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };
  

  return (
    <ThemeContext.Provider value={setThemeName}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
