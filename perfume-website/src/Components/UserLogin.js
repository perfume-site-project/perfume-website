import { Link } from 'react-router-dom';
import Login from './Login';
import styles from '../assets/css/UserLogin.module.css';

const UserLogin = () => {
  return (
    <section className={styles.userLogin}>
      <h1 className={styles.srOnly}>로그인</h1>
      <div className={styles.container}>
        <Login />
        <div>
          <div className={styles.links}>
            <Link to="/find-id" className={styles.link}>아이디 찾기</Link>
            <span>|</span>
            <Link to="/find-pw" className={styles.link}>비밀번호 찾기</Link>
          </div>
          {/* Link to Sign-up */}
          <Link to={"/sign-up"}>
            <button 
              type="button" 
              className={styles.button}
            >
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default UserLogin