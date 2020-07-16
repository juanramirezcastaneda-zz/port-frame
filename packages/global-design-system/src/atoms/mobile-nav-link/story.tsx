import React from 'react';
import Readme from './readme.md';
import { MobileNavLink } from '.';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'atoms|MobileNavLink',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const Configurable = () => <MobileNavLink />;
