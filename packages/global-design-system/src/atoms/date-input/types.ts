import { HTMLAttributes } from 'react';

export interface DateInputComponentProps {
  className?: string;
  disabled?: boolean;
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCurrentValue?: any;
  value?: Date;
}

export type DateInputProps = HTMLAttributes<HTMLInputElement> & DateInputComponentProps;
