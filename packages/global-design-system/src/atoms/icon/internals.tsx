import React, { FC } from 'react';
import { IconStyled } from './styled';
import { IconProps } from './types';

export const Icon: FC<IconProps> = () => {
  return <IconStyled icon="bars"></IconStyled>;
};
