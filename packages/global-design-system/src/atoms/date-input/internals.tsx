import React from 'react';
import { DateInputProps } from './types';
import { DateInputStyled, DateInputContainerStyled, LabelStyled } from './styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function DateInput({ className, disabled, isInline, label, setCurrentValue, value }: DateInputProps) {
  const labelComponent = label ? <LabelStyled isInline={isInline}>{label}</LabelStyled> : null;

  return (
    <DateInputStyled className={`${className}`} isInline={isInline}>
      {labelComponent}
      <DateInputContainerStyled>
        <DatePicker className={`form-control`} disabled={disabled} selected={value} onChange={setCurrentValue} />
      </DateInputContainerStyled>
    </DateInputStyled>
  );
}

DateInput.defaultProps = {
  isInline: false,
};
