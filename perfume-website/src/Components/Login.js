import axios from 'axios';
import React, { useState } from 'react';
import styles from '../assets/css/Login.module.css';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const requestPost = async (url, data) => {
    try {
      const options = {
        method: 'POST',
        url,
        data
      }
      const res = await axios(options);
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  const handleChangeState = (e) => {
    const target = e.target;
    setState(
      {
        ...state,
        [target.name]: target.value,
      }
    );
  }

  const handleLogin = () => {
    console.log(state)
    requestPost('/users/login', state).then(res => console.log(res));
    // res == true이면 home(로그인 상태)으로 이동
  }
  return (
    <div className={styles.login}>
      <div className={styles.inputContainer}>
        <label 
          className={styles.label}
          htmlFor="email"
        >
          아이디
        </label>
        <input 
          className={styles.input}
          id="email"
          type="text"
          name="email"
          value={state.email}
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
          id="password"
          type="text"
          name="password"
          value={state.password}
          onChange={handleChangeState}
        />
      </div>
      <button 
        type="button"
        onClick={handleLogin}
        className={styles.button}
      >
        로그인
      </button>
    </div>
  );
}

export default Login