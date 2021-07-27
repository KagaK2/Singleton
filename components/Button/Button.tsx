import clsx from "clsx";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.scss";

const Button = (props: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[props.type], styles[props.color])}
    >
      {props.children}
    </button>
  );
};

export default Button;