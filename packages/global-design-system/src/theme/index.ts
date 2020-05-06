/* eslint-disable @typescript-eslint/no-empty-interface */

import { Breakpoints, BreakpointNumbers, BreakpointsMax } from './breakpoints';
import Colors from './colors';
import FontSizes from './fontSizes';
import FontFamilies from './fontFamilies';
import FontWeights from './fontWeight';
import Margins from './margins';

const theme = {
  breakpointsMax: BreakpointsMax,
  breakpointNumbers: BreakpointNumbers,
  breakpoints: Breakpoints,
  colors: Colors,
  fontFamilies: FontFamilies,
  fontSizes: FontSizes,
  fontWeights: FontWeights,
  margins: Margins,
} as const;

export default theme;

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
