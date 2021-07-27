import { HTMLAttributes } from 'react';


export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  //Uncontrolled for testing first
  value?: string,
  placeholder: string,
  icon?: React.ReactNode,
}