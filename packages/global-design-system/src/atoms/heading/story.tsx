import React from 'react';
import Readme from './readme.md';
import { Heading } from '.';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { HeadingAppearance } from './constants';

export default {
  title: 'atoms|Heading',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const Configurable = () => (
  <Heading asHeading={select('As heading', HeadingAppearance, 'h1')}>{text('Body Text', 'H1')}</Heading>
);
