import React from 'react';
import { MaskLogoStyled, MaskLogoSvgStyled, MaskLogoText } from './styled';
import { MaskLogoProps } from './types';

export function MaskLogo({ ...props }: MaskLogoProps) {
  const text = props.orientation === 'Horizontal' ? 'Jsramirezc' : 'The juanramirezcastaneda Site';
  return (
    <MaskLogoStyled>
      <MaskLogoSvgStyled appearance={props.appearance} />
      <MaskLogoText textColor={props.textColor} orientation={props.orientation}>
        {text}
      </MaskLogoText>
    </MaskLogoStyled>
  );
}

MaskLogo.defaultProps = {
  appearance: 'Light',
  orientation: 'Horizontal',
  textColor: 'whiteCore',
};
