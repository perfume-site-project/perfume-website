import React, { useState } from 'react';
import styles from '../assets/css/FindPw.module.css'

const FindPw = () => {
  const [userId, setUserId] = useState(
    {
      userId: '',
    }
  );

  const handleChangeUserId = (e) => {
    const target = e.target;
    setUserId(
      {
        ...userId,
        [target.name]: target.value,
      }
    );
  }

  const handleSubmit = () => {
    // Server Request
    console.log(userId);
  }

  return (
    <section className={styles.findPw}>
      <h1 className={styles.srOnly}>비밀번호 찾기</h1>
      <div className={styles.container}>
        <label 
          htmlFor="userId"
          className={styles.label}
        >
          아이디(이메일)
        </label>
        <input
          className={styles.input}
          id="userId" 
          type="text"
          name="userId"
          value={userId.userId}
          onChange={handleChangeUserId}
        />
        <p className={styles.description}>
          회원가입 시 입력한 아이디(이메일 주소)를 입력해주십시오.
          <br/>
          해당 이메일 주소로 비밀번호를 재설정 할 수 있는 링크를 보내드릴 예정입니다.
        </p>
        <button 
          type="button" 
          onClick={handleSubmit}
          className={styles.button}
        >
          이메일 발송
        </button>
      </div>
    </section>
  );
}

export default FindPw