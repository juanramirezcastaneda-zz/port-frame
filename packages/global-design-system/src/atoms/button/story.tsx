import React from 'react';
import Readme from './readme.md';
import { Button } from '.';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
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

export const AsButton = () => (
  <Button
    appearance={select('Appearance', ButtonAppearance, 'Default')}
    disabled={boolean('Disabled', false)}
    ghost={boolean('Ghost', false)}
    onClick={action('onClick')}
  >
    {text('Button Text', 'Button')}
  </Button>
);

export const AsLink = () => (
  <Button
    appearance={select('Appearance', ButtonAppearance, 'Default')}
    as="a"
    ghost={boolean('Ghost', false)}
    href="javascript:void(0)"
    disabled={boolean('Disabled', false)}
    onClick={action('onClick')}
  >
    {text('Button Text', 'Button')}
  </Button>
);
