import React from 'react';
import Readme from './readme.md';
import { Header } from '.';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'organisms|Header',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const Configurable = () => <Header />;
