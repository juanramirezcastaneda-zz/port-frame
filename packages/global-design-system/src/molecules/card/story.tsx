import React from 'react';
import Readme from './readme.md';
import { Card } from '.';
import styled from 'styled-components';
import { withKnobs, select, text } from '@storybook/addon-knobs';

export default {
  title: 'molecules|CategoryCard',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

const Wrapper = styled.div`
  width: 212px;
  @media (max-width: ${(p) => p.theme.breakpointsMax[3]}) {
    width: 90px;
  }
`;

export const Configurable = () => (
  <Wrapper>
    <Card name={text('Service Name', 'Service Category')} href={text('Service Link', '#')} />
  </Wrapper>
);
