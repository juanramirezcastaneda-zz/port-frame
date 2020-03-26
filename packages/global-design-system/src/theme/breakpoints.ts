// numbers without px so we can do math manually if required
export const BreakpointNumbers = [480, 768, 1024, 1200, 1440, 1920];

export const Breakpoints = BreakpointNumbers.map(bp => `${bp}px`);
export const BreakpointsMax = BreakpointNumbers.map(bp => `${bp - 1}px`);
