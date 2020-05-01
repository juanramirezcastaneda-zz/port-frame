import React from 'react';
import Readme from './readme.md';
import { Button } from '.';
import { withKnobs, select, text } from '@storybook/addon-knobs';
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
  <Button appearance={select('Appearance', ButtonAppearance, 'Default')}>{text('Button Text', 'Button')}</Button>
);
