import { createGlobalStyle } from 'styled-components';
import theme from '../../theme/index';

export const Typography = createGlobalStyle`

  html {        
    font-family: ${theme.fontFamilies.roboto}; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  

`;
