import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>
{
  type: keyof typeof ButtonType
  color: string,
  children: React.ReactNode
  icon?: React.ReactNode
}

enum ButtonType {
  filled,
  outline,
  ghost
}