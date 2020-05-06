import React from 'react';
import { DateInput } from '.';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, date, text } from '@storybook/addon-knobs';
import DateInputReadme from './readme.md';

const darkBackgroundConfig = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#f0f0f0', default: true }],
  },
};

export default {
  title: 'Atoms|DateInput',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: DateInputReadme,
    },
  },
};

const DEFAULT_LABEL = 'Lorem ipsum dolor.';

function dateKnob(name: string, defaultValue: Date) {
  const stringTimestamp = date(name, defaultValue);
  return new Date(stringTimestamp);
}

export const Configurable = () => (
  <DateInput
    disabled={boolean('IsDisabled', false)}
    isInline={boolean('IsInline', false)}
    label={text('Label', DEFAULT_LABEL)}
    setCurrentValue={action('Change Date')}
    value={dateKnob('Date', new Date())}
  />
);

Configurable.story = darkBackgroundConfig;
