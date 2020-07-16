import React from 'react';
import Readme from './readme.md';
import { MobileNavAccordion } from '.';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'molecules|MobileNavAccordion',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const Configurable = () => <MobileNavAccordion />;
