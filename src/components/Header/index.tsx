import styles from './styles.module.css';
import Logo from '../../assets/logo.svg'

export function Header(){
  return (
    <header className={styles.headerContainer}>
      <img className={styles.headerLogo} src={Logo} alt="Logo ToDo List" />
    </header>
  )
}

export default Header;

