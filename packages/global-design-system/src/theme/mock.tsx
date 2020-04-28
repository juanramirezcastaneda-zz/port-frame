import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '~/theme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MockThemeProvider({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
