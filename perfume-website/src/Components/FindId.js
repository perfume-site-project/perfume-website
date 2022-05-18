import React, { useState } from 'react';
import styles from '../assets/css/FindId.module.css'

const FindId = () => {
  const [phoneNumber, setPhoneNumber] = useState(
    {
      phoneNumber: ''
    }
  );

  const handleChangePhoneNumber = (e) => {
    const target = e.target;
    setPhoneNumber(
      {
        ...phoneNumber,
        [target.name]: target.value, 
      }
    );
  }

  const handleSubmit = () => {
    // Server Request
    console.log(phoneNumber)
  }

  return (
    <section className={styles.findId}>
      <h1 className={styles.srOnly}>아이디 찾기</h1>
      <div className={styles.container}>
        <label 
          htmlFor="phoneNumber"
          className={styles.label}
        >
            연락처
        </label>
        <input
          className={styles.input}
          id="phoneNumber"
          type="text" 
          name="phoneNumber"
          value={phoneNumber.phoneNumber}
          onChange={handleChangePhoneNumber}
        />
        <p className={styles.description}>
          회원가입 시 입력한 연락처를 입력해주십시오.
          <br/>
          인증을 통해 아이디(E-mail)를 찾을 수 있습니다.
        </p>
        <button 
          type="button"
          onClick={handleSubmit}
          className={styles.button}
        >
          확인
        </button>
      </div>
    </section>
  );
}

export default FindId