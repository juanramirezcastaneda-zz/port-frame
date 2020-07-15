import React from 'react';
import Readme from './readme.md';
import { SocialLinks } from '.';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'molecules|SocialLinks',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const Configurable = () => <SocialLinks />;
