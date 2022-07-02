import { ClipboardText } from 'phosphor-react';
import TaskItem from '../TaskItem';
import styles from './styles.module.css';

export function Task(){
  const taskList = 1
  return(
    <div className={styles.TasksContainer}>
      <div className={styles.TasksInfo}>
        <div className={styles.TasksCreated}>
          <strong className={styles.strongCreated}>Tarefas criadas</strong>
          <span className={styles.tasksNumbers}>15</span>
        </div>
        <div className={styles.completedTasks}>
          <strong className={styles.completedStrong}>Concluídas</strong>
          <span className={styles.tasksNumbers}>10</span>
        </div>
      </div>
      <div className={styles.tasksList}>
      { taskList === 0 ? 
        (
          <div className={styles.tasksIcon}>
            <div className={styles.tasksText}>
              <ClipboardText size={56}/>
              <p className={styles.tasksTextP}>Você ainda não tem tarefas cadastradas</p>
              <span className={styles.tasksTextS}>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        ) : (
          <>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
          </>
        )
      }
      </div>
    </div>
  )
}

export default Task;