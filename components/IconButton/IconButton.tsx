import Image from 'next/image';
import styles from './IconButton.module.scss';
import ArrowRight from '../../public/icons/arrow-right.svg';

const IconButton = () => {
  
  return (
    <button className={styles.iconButton}>
      <ArrowRight className={styles.icon}/>
    </button>
  )
}

export default IconButton;