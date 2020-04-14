import React from 'react';
import Readme from './readme.md';
import { Heading } from '.';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { HeadingAppearance } from './constants';
import FontSizes from '~/theme/fontSizes';
import Colors from '~/theme/colors';

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
const colorOptions = Object.keys(Colors) as (keyof typeof Colors)[];

export const Configurable = () => (
  <Heading
    asHeading={select('As Heading', HeadingAppearance, 'h1')}
    color={select('Color', colorOptions, colorOptions[0])}
    fontSize={select('Font Size', fontSizes, '200')}
  >
    {text('Body Text', 'H1')}
  </Heading>
);
