import React from 'react';
import { HeadingStyled } from './styled';
import { HeadingProps } from './types';

export function Heading({ asHeading, children, color, fontSize, fontWeight }: HeadingProps) {
  return (
    <HeadingStyled as={asHeading} color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </HeadingStyled>
  );
}

Heading.defaultProps = {
  asHeading: 'h1',
  color: 'blackText',
  fontSize: '100',
  fontWeight: 'normal',
};
