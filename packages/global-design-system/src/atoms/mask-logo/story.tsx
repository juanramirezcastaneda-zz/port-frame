import React from 'react';
import Readme from './readme.md';
import { MaskLogo } from '.';
import { withKnobs, select } from '@storybook/addon-knobs';
import { MaskLogoAppearance, MaskLogoOrientation } from './constants';
import Colors from '~/theme/colors';

const darkBackgroundConfig = {
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#18222b', default: true }],
  },
};

export default {
  title: 'atoms|MaskLogo',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

const colors = Object.keys(Colors) as (keyof typeof Colors)[];

export const Configurable = () => (
  <MaskLogo
    appearance={select('Appearance', MaskLogoAppearance, 'Light')}
    orientation={select('Orientation', MaskLogoOrientation, 'Horizontal')}
    textColor={select('Color', colors, 'whiteCore')}
  />
);

Configurable.story = darkBackgroundConfig;
