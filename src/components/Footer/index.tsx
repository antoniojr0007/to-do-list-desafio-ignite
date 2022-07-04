import styles from './styles.module.css';
import Logo from '../../assets/logo.svg'

export function Footer(){
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerHeader}>
        <img className={styles.footerLogo} src={Logo} alt="Logo ToDo List" />
        <p className={styles.footerP}>&copy; Rocketseat 2022 Todos os direitos reservados</p>
      </div>
      <div className={styles.footerLink}>
        <a className={styles.footerA} href="https://www.rocketseat.com.br/sobre">A Rocketseat</a>
        <a className={styles.footerA} href="https://www.rocketseat.com.br/copyright">Direitos autorais</a>
        <a className={styles.footerA} href="https://www.rocketseat.com.br/terms">Termos de uso</a>
        <a className={styles.footerA} href="https://www.rocketseat.com.br/privacy">Políticas de privacidade</a>
      </div>
    </footer>
  )
}

export default Footer;