import React from 'react';
import { HeadingProps } from './types';
import { HeadingStyled } from './styled';

export const Heading: React.FC<HeadingProps> = props => {
  return <HeadingStyled {...props} as={props.asHeading} />;
};

Heading.defaultProps = {
  asHeading: 'h1',
};
