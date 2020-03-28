import { addDecorator, addParameters, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { BreakpointNumbers } from '../src/theme/breakpoints';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withTheme } from './theme';

const req = require.context('../src', true, /story\.tsx$/);

const viewports = BreakpointNumbers.reduce(
  (viewports, bp) => ({
    ...viewports,
    [`breakpoint${bp}`]: {
      name: `Breakpoint ${bp}px`,
      styles: {
        width: `${bp}px`,
        height: '100%',
      },
    },
  }),
  {}
);

function loadStories() {
  addDecorator(withTheme);
  addDecorator(addReadme);

  addParameters({
    knobs: {
      escapeHTML: false,
    },
    viewport: {
      viewports: {
        breakpoint360: {
          name: `Under ${BreakpointNumbers[0]}px`,
          styles: {
            width: '360px',
            height: '100%',
          },
        },
        ...viewports,
      },
    },
  });

  return req.keys().map((filename) => {
    if (filename !== '.template') {
      return req(filename);
    }
  });
}

configure(loadStories, module);
