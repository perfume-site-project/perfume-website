import styles from '../../assets/css/Layout/Header.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
          <ul className={styles.category}>
            {props.category &&
                props.category.map((items, idx) => (
                <div id={"item"+idx} style={{height: props.heights[idx], margin: '50px'}}>
                    <li id={items} >{items}</li>
                </div>
            ))}
        </ul>
      </div>
    </header>
  );
}

Header.defaultProps = {
    category:[]
}
export default Header
