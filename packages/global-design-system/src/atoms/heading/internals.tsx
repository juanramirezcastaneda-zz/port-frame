import React, { FC } from 'react';
import { HeadingStyled } from './styled';
import { HeadingProps } from './types';

export const Heading: FC<HeadingProps> = ({ asHeading, children, color, fontSize, fontWeight }) => {
  return (
    <HeadingStyled as={asHeading} color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </HeadingStyled>
  );
};

Heading.defaultProps = {
  asHeading: 'h1',
  color: 'blackText',
  fontSize: '100',
  fontWeight: 'normal',
};
