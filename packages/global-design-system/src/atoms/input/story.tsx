import React from 'react';
import { Input } from '.';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import InputReadme from './readme.md';
import { InputType } from './constants';

const darkBackgroundConfig = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#f0f0f0', default: true }],
  },
};

export default {
  title: 'Atoms|Input',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: InputReadme,
    },
  },
};

const DEFAULT_LABEL = 'Lorem ipsum dolor.';
const DEFAULT_VALUE = 'Lorem ipsum dolor.';

export const Configurable = () => (
  <Input
    disabled={boolean('IsDisabled', false)}
    isInline={boolean('IsInline', false)}
    label={text('Label', DEFAULT_LABEL)}
    type={select('Type', InputType, 'text')}
    value={text('Value', DEFAULT_VALUE)}
  />
);

Configurable.story = darkBackgroundConfig;
