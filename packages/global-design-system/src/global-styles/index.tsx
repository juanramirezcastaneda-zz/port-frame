import React, { Fragment, FC } from 'react';
import { Reset } from './reset';
import { BoxSizing } from './box-sizing';
import { Typography } from './typography';

export const GlobalStyles: FC = () => {
  return (
    <Fragment>
      <Reset />
      <BoxSizing />
      <Typography />
    </Fragment>
  );
};
