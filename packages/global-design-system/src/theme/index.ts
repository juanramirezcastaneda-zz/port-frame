/* eslint-disable @typescript-eslint/no-empty-interface */

import { Breakpoints, BreakpointNumbers, BreakpointsMax } from './breakpoints';
import Colors from './colors';
import FontSizes from './fontSizes';

const theme = {
  breakpointNumbers: BreakpointNumbers,
  breakpoints: Breakpoints,
  breakpointsMax: BreakpointsMax,
  colors: Colors,
  fontSizes: FontSizes,
} as const;

export default theme;

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
