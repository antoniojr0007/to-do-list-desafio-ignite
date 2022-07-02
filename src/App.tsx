import "./global.css";
import styles from './App.module.css';
import Header from './components/Header';
import NewTask from './components/NewTask';
import Task from "./components/Task";

function App() {
 
  return (
    <div>
      <header className={styles.appHeader}>
        <Header />
        <NewTask />
      </header>
      <div className={styles.appWrapper}>
        <Task />
      </div>
    </div>
  )
}

export default App
