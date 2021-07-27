import styles from './TextField.module.scss';
import { TextFieldProps } from './TextField.types';

const TextField = (props: TextFieldProps) => {
  return (
    <div>
      {props.icon}
      <input 
        type="text"
        className={styles.textField}
        value={props.value} 
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default TextField;