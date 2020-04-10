import React, { FC } from 'react';
import { HeadingStyled } from './styled';
import { HeadingProps } from './types';

export const Heading: FC<HeadingProps> = ({ children }) => {
  return <HeadingStyled>{children}</HeadingStyled>;
};
