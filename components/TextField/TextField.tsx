import styles from './TextField.module.scss';

const TextField = (props: any) => {
  return (
    <div>
      <input 
        type="text"
        className={styles.textField}
        value={props.value} 
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  )
}

export default TextField;