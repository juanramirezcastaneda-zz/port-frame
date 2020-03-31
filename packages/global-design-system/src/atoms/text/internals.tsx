import React from 'react';
import { TextStyled } from './styled';
import { TextProps } from './types';

export const Text: React.FC<TextProps> = (props) => {
  return <TextStyled {...props} />;
};
