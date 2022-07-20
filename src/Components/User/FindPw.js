import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/User/FindPw.module.css'

const FindPw = ({ requestPost, findPw }) => {
  const userEmailInput = useRef();

  const navigate = useNavigate();
  const [state, setState] = useState(
    {
      email: '',
    }
  );

  const handleChangeEmail = (e) => {
    const target = e.target;
    setState(
      {
        ...state,
        [target.name]: target.value,
      }
    );
  }

  const handleKeyUp = () => {
    if(window.event.keyCode === 13) {
      handleFindPw();
    }
  }

  const handleFindPw = () => {
    if(state.email.length < 1) {
      alert('이메일을 입력해주세요.');
      userEmailInput.current.focus(); 
      return;
    }

    const url = '/users/findpw';
    requestPost(url, state);
    if(findPw === true) {
      navigate('/', {replace: true});
      // 비밀번호 재설정 경로로 변경
    } else {
      alert('회원 정보가 없습니다.');
    }
  }

  return (
    <section className={styles.findPw}>
      <h1 className={styles.srOnly}>비밀번호 찾기</h1>
      <div className={styles.container}>
        <label 
          htmlFor="email"
          className={styles.label}
        >
          아이디(이메일)
        </label>
        <input
          className={styles.input}
          id="email" 
          type="text"
          name="email"
          value={state.email}
          ref={userEmailInput}
          onKeyUp={handleKeyUp}
          onChange={handleChangeEmail}
        />
        <p className={styles.description}>
          회원가입 시 입력한 아이디(이메일 주소)를 입력해주십시오.
          <br/>
          해당 이메일 주소로 비밀번호를 재설정 할 수 있는 링크를 보내드릴 예정입니다.
        </p>
        <button 
          type="button" 
          onClick={handleFindPw}
          className={styles.button}
        >
          이메일 발송
        </button>
      </div>
    </section>
  );
}

export default FindPw