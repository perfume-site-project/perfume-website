import styles from './Header.module.css'
import logo from './logo.png';

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