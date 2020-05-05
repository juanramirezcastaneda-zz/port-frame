import React from 'react';
import { DateInputProps } from './types';
import { DateInputStyled, DateInputContainerStyled } from './styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function DateInput({ className, disabled, label, setCurrentValue, value }: DateInputProps) {
  //   const labelComponent = label ? <LabelStyled>{label}</LabelStyled> : null;

  return (
    <DateInputStyled className={`${className}`}>
      {/* {labelComponent} */}
      <DateInputContainerStyled>
        <DatePicker className={`form-control`} disabled={disabled} selected={value} onChange={setCurrentValue} />
      </DateInputContainerStyled>
    </DateInputStyled>
  );
}
