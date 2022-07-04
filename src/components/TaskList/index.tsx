import { CheckCircle, Circle, PlusCircle, Trash } from 'phosphor-react';
import {useEffect, useState, FormEvent } from 'react';
import styles from './styles.module.css';
import { v4 as uuid } from 'uuid';
import Empty from '../Empty';

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function TaskList(){

  const [tasks , setTasks] = useState<Task[]>([]);
  const [newTask , setNewTask] = useState('');
  const [completedTasks, setCompletedTasks] = useState(0)

  const tasksNumbers = tasks.length;
  
  function handleCreateNewTask(event: FormEvent) {
    if (newTask !== "") {
      event.preventDefault();
      
      setTasks([...tasks, {
        id: uuid(),
        title: newTask,
        isComplete: false,
      }]);
     
      setNewTask("")
    }
  }

  function handleToggleTaskCompletion(id: string) {
    const listTask = tasks.filter((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete
      } 
      return task
    })
    setTasks(listTask)
  }

  function handleRemoveTask(id: string) {
    const newListTasks = tasks.filter(task => task.id !== id);
    setTasks(newListTasks);
  }

  useEffect(() => {
    var completedTasks = tasks.filter(task => task.isComplete == true).length;
    setCompletedTasks(completedTasks)
  }, [handleToggleTaskCompletion])

  return(
    <section className={styles.taskListContainer}>
      <form onSubmit={() =>{}} className={styles.newTaskContainer}>
        <input className={styles.newTaskInput} 
          title="Adicionar novo todo"
          type="text"
          placeholder="Adicionar novo todo"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <button type='submit' 
          className={styles.newTaskButton} 
          title='add todo'
          onClick={handleCreateNewTask}>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
      <main className={styles.taskListMain}>
        <div className={styles.TasksInfo}>
          <div className={styles.TasksCreated}>
            <strong className={styles.strongCreated}>Tarefas criadas</strong>
            <span className={styles.tasksNumbers}>{tasksNumbers}</span>
          </div>
          <div className={styles.completedTasks}>
            <strong className={styles.completedStrong}>Concluídas</strong>
            <span className={styles.tasksNumbers}>{completedTasks} de {tasksNumbers}</span>
          </div>
        </div>
       {tasksNumbers !== 0 ? 
       (
         <ul className={styles.taskListUl}>
            {tasks.map(task => (
              <li className={styles.TaskItemContainer}
                key={task.id}>
                <div className={styles.TaskItemBody}>
                  <button className={styles.TaskItemCheckBoxFalse} 
                    title='Checkbox' 
                    type="submit" 
                    onClick={() => handleToggleTaskCompletion(task.id)} 
                  >
                    { task.isComplete ? 
                      (<CheckCircle  size={24}/>) : 
                      (<Circle size={24}/>) 
                    }
                  </button>
                  <p className={task.isComplete ? styles.TaskItemTextFalse : styles.TaskItemText}>
                    {task.title}
                  </p>
                  <button className={styles.TaskItemButton}
                    title='remover todo'
                    type="button" onClick={() => handleRemoveTask(task.id)}>
                    <Trash size={16}/>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : 
        (<Empty />)
       }
      </main>
    </section>
    
    
  )
}

export default TaskList;