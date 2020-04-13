import React from 'react';
import Readme from './readme.md';
import { Heading } from '.';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { HeadingAppearance } from './constants';
import FontSizes from '~/theme/fontSizes';

export default {
  title: 'atoms|Heading',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

const fontSizes = Object.keys(FontSizes) as (keyof typeof FontSizes)[];

export const Configurable = () => (
  <Heading asHeading={select('As Heading', HeadingAppearance, 'h1')} fontSize={select('Font Size', fontSizes, '200')}>
    {text('Body Text', 'H1')}
  </Heading>
);
