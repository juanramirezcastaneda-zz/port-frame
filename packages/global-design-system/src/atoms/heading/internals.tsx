import React, { FC } from 'react';
import { HeadingStyled } from './styled';
import { HeadingProps } from './types';

export const Heading: FC<HeadingProps> = ({ asHeading, children, color, fontSize }) => {
  return (
    <HeadingStyled as={asHeading} color={color} fontSize={fontSize}>
      {children}
    </HeadingStyled>
  );
};

Heading.defaultProps = {
  asHeading: 'h1',
  fontSize: '100',
};
