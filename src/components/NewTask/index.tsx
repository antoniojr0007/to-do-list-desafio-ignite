import { PlusCircle } from 'phosphor-react';
import styles from './styles.module.css';

export function NewTask(){
  return(
    <div className={styles.newTaskContainer}>
      <input className={styles.newTaskInput} 
        type="text"
        placeholder="Enter your name"
      />
      <button className={styles.newTaskButton}>
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
    
  )
}

export default NewTask;