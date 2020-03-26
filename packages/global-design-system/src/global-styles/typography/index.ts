import { createGlobalStyle } from 'styled-components';
import theme from '../../theme/index';

export const Typography = createGlobalStyle` html {        
    font-family: ${theme.fontFamilies.lato}; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${theme.colors.lightBlue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
