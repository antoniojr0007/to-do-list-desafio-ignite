import "./global.css";
import styles from './App.module.css';
import Header from './components/Header';
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <div className={styles.appWrapper}>
        <TaskList />
      </div>
        <Footer />
    </div>
  )
}

export default App
