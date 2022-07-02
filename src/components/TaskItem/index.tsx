import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './styles.module.css';

export function TaskItem(){
  const [check, setCheck] = useState(false)

  function handleCheckPress() {
    setCheck(true)
  }

  function handleCheckPressfalse() {
    setCheck(false)
  }

  return(
    <div className={styles.TaskItemContainer}>
      <div className={styles.TaskItemBody}>
        {check !== true ? 
        (
          <>
            <button
              className={styles.TaskItemCheckBox} 
              title='Checkbox' 
              type="submit" 
              onClick={handleCheckPress} 
            >
              <Circle  size={24}/>
            </button>
            <p className={styles.TaskItemText} >Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            
          </>
        ) : 
        (
          <>
            <button
              className={styles.TaskItemCheckBoxFalse} 
              title='Checkbox' 
              type="submit" 
              onClick={handleCheckPressfalse} 
            >
              <CheckCircle  size={24}/>
            </button>
            <p className={styles.TaskItemTextFalse} >Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          </>
        )}
        <button  
          className={styles.TaskItemButton}
          title='Trash' 
          type="submit">
          <Trash  size={24}/>
        </button>
      </div>
    </div>
  )
}

export default TaskItem;