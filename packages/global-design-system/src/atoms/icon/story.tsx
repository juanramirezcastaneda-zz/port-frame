import React from 'react';
import styled from 'styled-components';
import Readme from './readme.md';
import { Icon } from '.';
import { withKnobs, select } from '@storybook/addon-knobs';
import { IconOptions } from './constants';

export default {
  title: 'atoms|Icon',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
};

export const Configurable = () => <Icon icon={select('Icon', IconOptions, 'bars')} />;

export const AllIcons = () => {
  const IconWrapper = styled.div`
    border: 1px black solid;
    padding: 2rem;
    display: inline-flex;
    top: 0;
  `;

  const IconsContainer = styled.div`
    position: relative;
  `;

  return (
    <IconsContainer>
      {IconOptions.map((icon, i) => {
        return (
          <IconWrapper key={i}>
            <Icon icon={icon} />
          </IconWrapper>
        );
      })}
    </IconsContainer>
  );
};
