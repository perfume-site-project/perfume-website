import styles from '../assets/css/ResetPw.module.css';
import { useState, useRef } from 'react';

const ResetPw = ({ resetPw }) => {
  const passwordInput = useRef()
  const newPasswordInput = useRef()

  const [state, setState] = useState({
    password: '',
    newPassword: '',
  })

  const handleStateChange = (e) => {
    const target = e.target;
    setState(
      {
        ...state,
        [target.name]: target.value,
      }
    )
  }
  
  const handleSubmit = () => {
    if(state.password.length < 1) {
      alert('비밀번호를 입력해주세요.')
      passwordInput.current.focus()
      return;
    }

    if(state.newPassword.length < 1) {
      alert('새로운 비밀번호를 입력해주세요.')
      newPasswordInput.current.focus()
      return;
    }

    if(state.password !== state.newPassword) {
      alert('비밀번호가 서로 일치하지 않습니다.');
      return;
    } else {
      console.log(state)
      // resetPw()
    }
  }

  return (
    <section className={styles.resetPw}>
      <h1 className={styles.srOnly}>비밀번호 재설정</h1>
      <div className={styles.container}>
        <label 
          htmlFor="password" 
          className={styles.label}
        >
          기존 비밀번호
        </label>
        <input 
          type="password" 
          ref={passwordInput}
          className={styles.input}
          id="Password" 
          name="password" 
          value={state.password} 
          onChange={handleStateChange} 
        />
        <label 
          htmlFor="password" 
          className={styles.label}
        >
          새로운 비밀번호
        </label>
        <input 
          type="password" 
          ref={newPasswordInput}
          className={styles.input}
          id="newPassword" 
          name="newPassword" 
          value={state.newPassword} 
          onChange={handleStateChange} 
        />
        <button 
          type="button"
          className={styles.button}
          onClick={handleSubmit}
        >
          변경하기
        </button>
      </div>
    </section>
  );
}

export default ResetPw;