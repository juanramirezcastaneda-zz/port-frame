import React from 'react';
import Readme from './readme.md';
import styled from 'styled-components';
import { MobileNavAccordion } from '.';
import { withKnobs } from '@storybook/addon-knobs';
import { MobileNavLink } from '~/atoms/mobile-nav-link';

export default {
  title: 'molecules|MobileNavAccordion',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

const Wrapper = styled.div`
  width: 320px;
`;

export const Configurable = () => (
  <Wrapper>
    <MobileNavAccordion title="Categories" url="/caregories">
      <MobileNavLink sublink href="#">
        Tires
      </MobileNavLink>
      <MobileNavLink sublink href="#">
        Engines
      </MobileNavLink>
      <MobileNavLink sublink href="#">
        Parts
      </MobileNavLink>
    </MobileNavAccordion>
  </Wrapper>
);
