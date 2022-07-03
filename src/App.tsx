import "./global.css";
import styles from './App.module.css';
import Header from './components/Header';
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <header className={styles.appHeader}>
        <Header />
      </header>
      <div className={styles.appWrapper}>
        <TaskList />
      </div>
    </div>
  )
}

export default App
