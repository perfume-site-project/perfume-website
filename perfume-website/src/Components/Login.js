import React, { useState } from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import styles from '../assets/css/Login.module.css';

const Login = () => {
  const [state, setState] = useState({
    userId: '',
    userPassword: '',
  });

  const handleChangeState = (e) => {
    const target = e.target;
    setState(
      {
        ...state,
        [target.name]: target.value,
      }
    );
  }

  const handleSubmit = () => {
    // Server request
    const url = '/users/login';
    fetch(url).then(res => console.log(res));
  }

  return (
    <section className={styles.login}>
      <h1 className={styles.srOnly}>로그인</h1>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label 
            className={styles.label}
            htmlFor="userId"
          >
            아이디
          </label>
          <input 
            className={styles.input}
            id="userId"
            type="text"
            name="userId"
            value={state.userId}
            onChange={handleChangeState}
          />
        </div>
        <div className={styles.inputContainer}>
          <label 
            className={styles.label}
            htmlFor="userPassword"
          >
            비밀번호
          </label>
          <input
            className={styles.input}
            id="userPassword"
            type="text"
            name="userPassword"
            value={state.userPassword}
            onChange={handleChangeState}
          />
        </div>
        <button 
          type="button"
          onClick={handleSubmit}
          className={styles.button}
        >
          로그인
        </button>
        <div>
          <div className={styles.links}>
            {/* Link Component로 변경 */}
            <a className={styles.link} href="#">아이디 찾기</a>
            <span>|</span>
            <a className={styles.link} href="#">비밀번호 찾기</a>
          </div>
          <button 
            type="button" 
            className={styles.button}
            onClick={handleSubmit}
          >
            회원가입
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login