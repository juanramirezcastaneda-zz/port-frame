import React from 'react';
import Readme from './readme.md';
import { Heading } from '.';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'atoms|Heading',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const Configurable = () => <Heading />;
