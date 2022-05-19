import React, { useState } from 'react';
import axios from 'axios';
import styles from '../assets/css/FindId.module.css'

const FindId = () => {
  const [phoneNumber, setPhoneNumber] = useState(
    {
      phoneNumber: ''
    }
  );

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
    requestPost('/users/id', phoneNumber).then(res => console.log(res));
    // res == true이면 modal창으로 userId 출력
    // res == false이면 modal창으로 틀렸음을 출력
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