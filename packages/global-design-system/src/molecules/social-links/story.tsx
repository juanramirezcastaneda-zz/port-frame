import React from 'react';
import Readme from './readme.md';
import { SocialLinks } from '.';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Appearance } from './constants';

export default {
  title: 'molecules|SocialLinks',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const Configurable = () => (
  <SocialLinks
    appearance={select('Appearance', Appearance, 'Light')}
    linkedinUrl={text('LinkedIn URL', 'https://www.linkedin.com/in/juan-sebastian-ramirez-casta%C3%B1eda-8176a04b/')}
    facebookUrl={text('Facebook URL', 'https://www.facebook.com/juan.s.ramirez.777')}
    twitterUrl={text('Twitter URL', 'https://twitter.com/jsramirezc')}
    youtubeUrl={text('Youtube URL', 'https://www.youtube.com/channel/UCbVNBFaRkgL-6kg92q1fsYw')}
  />
);
