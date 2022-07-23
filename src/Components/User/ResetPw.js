import styles from '../../assets/css/User/ResetPw.module.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPw = ({ requestPost, resetPw }) => {
  const navigate = useNavigate();
  
  const passwordInput = useRef()
  const newPasswordInput = useRef()

  const [password, setPassword] = useState({
    beforePassword: '',
  });
  const [state, setState] = useState({})

  const handleChangeBeforePassword = (e) => {
    const target = e.target;
    setPassword(
      {
        ...password,
        [target.name]: target.value,
      }
    )
  }

  const handleChangeNewPassword = (e) => {
    const target = e.target;
    setState(
      {
        ...resetPw,
        password: target.value,
      }
    )
  }

  const handleKeyUp = () => {
    if(window.event.keyCode === 13) {
      handleSubmit();
    }
  }
  
  const handleSubmit = async () => {
    if(password.beforePassword.length < 1) {
      alert('비밀번호를 입력해주세요.')
      passwordInput.current.focus()
      return;
    }

    if(state.password.length < 1) {
      alert('새로운 비밀번호를 입력해주세요.')
      newPasswordInput.current.focus()
      return;
    }

    if(password.beforePassword !== state.password) {
      alert('비밀번호가 서로 일치하지 않습니다.');
      return;
    }

    const url = '/users/resetpw';
    const res = await requestPost(url, state);
    if(res.data.success === false) {
      alert('비밀번호 재설정에 실패하였습니다.');
    } else {
      alert('비밀번호 재설정이 완료되었습니다.');
      navigate('/', {replace: true});
    }
  }

  return (
    <section className={styles.resetPw}>
      <h1 className={styles.srOnly}>비밀번호 재설정</h1>
      <div className={styles.container}>
        <label 
          htmlFor="beforePassword" 
          className={styles.label}
        >
          기존 비밀번호
        </label>
        <input 
          type="password" 
          ref={passwordInput}
          className={styles.input}
          id="beforePassword" 
          name="beforePassword" 
          value={password.beforePassword}
          onKeyUp={handleKeyUp}
          onChange={handleChangeBeforePassword} 
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
          id="password" 
          name="password" 
          value={state.newPassword} 
          onKeyUp={handleKeyUp}
          onChange={handleChangeNewPassword} 
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