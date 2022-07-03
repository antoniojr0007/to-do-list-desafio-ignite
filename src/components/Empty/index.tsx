import { ClipboardText } from 'phosphor-react';
import styles from './styles.module.css';

export function Empty(){
  return(
    <div className={styles.tasksList}>
      <div className={styles.tasksIcon}>
        <div className={styles.tasksText}>
          <ClipboardText size={56}/>
          <p className={styles.tasksTextP}>Você ainda não tem tarefas cadastradas</p>
          <span className={styles.tasksTextS}>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>
    </div>
  )
}

export default Empty;