import React from 'react';
import Readme from './readme.md';
import { MobileNavLink } from '.';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'atoms|MobileNavLink',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const Configurable = () => (
  <MobileNavLink href={text('URL', 'https://www.linkedin.com/feed/')} sublink={boolean('Sub link', false)}>
    {text('Text', 'Home')}
  </MobileNavLink>
);
