import React from 'react';
import Readme from './readme.md';
import { Icon } from '.';
import { withKnobs, select } from '@storybook/addon-knobs';
import { IconOptions } from './constants';

export default {
  title: 'atoms|Icon',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const Configurable = () => <Icon icon={select('Icon', IconOptions, 'bars')} />;
