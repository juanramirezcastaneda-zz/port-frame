import React from 'react';
import Homepage from './components/pages/Homepage';
import theme from '@port-frame/gds/src/theme';
import { GlobalStyles } from '@port-frame/gds/src/global-styles';
import { ThemeProvider } from 'styled-components';
import './favicon.ico';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Homepage />
      </ThemeProvider>
    </>
  );
}

export default App;
