import React from 'react';
import { Text } from '.';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import TextReadme from './readme.md';
import FontSizes from '~/theme/fontSizes';

const darkBackgroundConfig = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#f0f0f0', default: true }],
  },
};

export default {
  title: 'Atoms|Text',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: TextReadme,
    },
  },
};

const DEFAULT_TEXT = 'Lorem ipsum dolor sit amet.';

const fontSizes = Object.keys(FontSizes) as (keyof typeof FontSizes)[];

export const Configurable = () => (
  <Text size={select('Font Size', fontSizes, '100')}>{text('Body Text', DEFAULT_TEXT)}</Text>
);

Configurable.story = darkBackgroundConfig;
