import Colors from './colors';
import FontFamilies from './fontFamilies';
import { Breakpoints, BreakpointNumbers, BreakpointsMax } from './breakpoints';

const theme = {
  breakpointNumbers: BreakpointNumbers,
  breakpoints: Breakpoints,
  breakpointsMax: BreakpointsMax,
  colors: Colors,
  fontFamilies: FontFamilies,
} as const;

export default theme;

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
