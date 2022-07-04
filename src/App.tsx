import "./global.css";
import styles from './App.module.css';
import Header from './components/Header';
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className={styles.appWrapper}>
        <TaskList />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
