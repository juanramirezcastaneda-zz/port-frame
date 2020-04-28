import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '~/theme';

export function MockThemeProvider({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
