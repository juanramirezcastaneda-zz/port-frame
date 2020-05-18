import React from 'react';
import { CardStyled, TextContainer, IconContainer } from './styled';

import { CardProps } from './types';
import { Text } from '~/atoms/text';

export function Card({ ...props }: CardProps) {
  return (
    <CardStyled {...props}>
      <IconContainer>{/* <IconContainerBackgroundStyled /> */}</IconContainer>
      <TextContainer>
        <Text size={'200'}>{props.name}</Text>
      </TextContainer>
    </CardStyled>
  );
}
