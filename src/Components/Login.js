import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/Login.module.css';

const Login = ({ requestPost, onUserState }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
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

  const handleLogin = async () => {
    const url = '/users/login';
    const req = await requestPost(url, state)
    if(req.data.loginSuccess === true) {
      sessionStorage.setItem('user-email', state.email)
      navigate('/', {replace: true});
    } else {
      alert('사용자의 이메일과 비밀번호가 존재하지 않습니다.');
    }
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
          type="password"
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