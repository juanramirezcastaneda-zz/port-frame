import { addDecorator, configure } from '@storybook/react';
import { withTheme } from './theme';

const req = require.context('../src', true, /story\.tsx$/);
function loadStories() {
  addDecorator(withTheme);

  req.keys().forEach(req);
}
configure(loadStories, module);
