import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

const Button = (props: ButtonProps) => {

  return (
    <button className={clsx(styles[props.type])}>
      {props.children}
    </button>
  )
}

export default Button;
//Each Button has 3 types: Filled, Outlined and Ghost
//Each Button has 4 states: Default, Hover, Active, Disabled
//Each Button can has icon or not
//Each Button can has some kind of colors: Primary and Secondary
