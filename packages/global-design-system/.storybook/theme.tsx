import React from 'react';
import { GlobalStyles } from '../src/global-styles';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/index';

export function withTheme(story: any) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </>
  );
}
