import React from 'react';
import theme from '.';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

export default {
  title: 'Theme',
  decorators: [withKnobs],
};

const AllColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColorInfo = styled.div`
  background: #fff;
  padding: 0.25rem;
  text-align: center;
`;

const StyledDiv = styled.div<any>`
  align-items: center;
  background-color: ${(p) => p.color};
  display: flex;
  height: 125px;
  justify-content: center;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 125px;
`;

export const AllColors = () => {
  const colorKeys = Object.keys(theme.colors) as (keyof typeof theme.colors)[];
  return (
    <AllColorsContainer>
      {colorKeys.map((key) => (
        <StyledDiv key={key} color={theme.colors[key]} spacing="0.5rem">
          <ColorInfo>
            <div>{key}</div>
            <div>{theme.colors[key]}</div>
          </ColorInfo>
        </StyledDiv>
      ))}
    </AllColorsContainer>
  );
};
