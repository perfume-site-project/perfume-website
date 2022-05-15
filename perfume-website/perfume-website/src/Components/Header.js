import styles from '../assets/css/Header.module.css'
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={styles.category}>
          {/* li */}
        </ul>
      </div>
    </header>
  );
}

export default Header
