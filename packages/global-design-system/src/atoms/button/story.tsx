import React from 'react';
import Readme from './readme.md';
import { Button } from '.';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { ButtonAppearance } from './constants';

export default {
  title: 'atoms|Button',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const Configurable = () => (
  <Button
    appearance={select('Appearance', ButtonAppearance, 'Default')}
    disabled={boolean('Disabled', false)}
    ghost={boolean('Ghost', false)}
  >
    {text('Button Text', 'Button')}
  </Button>
);
