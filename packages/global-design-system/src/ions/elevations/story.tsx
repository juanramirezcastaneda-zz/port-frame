import React from 'react';
import { getBoxShadow, ElevationLevel } from '.';
import { withKnobs, select } from '@storybook/addon-knobs';
import styled from 'styled-components';

export default {
  title: 'Ions|Elevations',
  decorators: [withKnobs],
};

const Levels: ElevationLevel[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const StyledDiv = styled.div<{ level: ElevationLevel }>`
  width: 100px;
  height: 100px;
  margin: 10px 10px;
  ${(p) => getBoxShadow(p.level)}
`;

export const Configurable = () => <StyledDiv level={select('Level', Levels, 1)} />;
