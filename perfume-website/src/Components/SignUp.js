import React, { useState } from 'react';
import axios from 'axios';
import styles from '../assets/css/FindId.module.css'

const SignUp = () => {
  return (
    <section className={styles.findId}>
      <h1 className={styles.srOnly}>아이디</h1>
      <div className={styles.container}>
        <label 
          className={styles.label}
        >
            아이디
        </label>
        <div>
        <input
          className={styles.input}
          type="text" id="userId"
        />
        <span> @ </span>
        <input
          className={styles.input}
          type="text" id="userId"
        />
        <span>  </span>
        <select className={styles.input} name="language" >
            <option value="none">선택</option>
            <option value="naver">naver.com</option>
            <option value="daum">daum.net</option>
            <option value="hanmail">hanmail.net</option>
            <option value="nate">nate.com</option>
            <option value="gmail">gmail.com</option>
            <option value="hotmail">hotmail.com</option>
            <option value="hanmir">hanmir.com</option>
            <option value="dreamwiz">dreamwiz.com</option>
            <option value="lycos">lycos.co.kr</option>
            <option value="empas">empas.com</option>
            <option value="self">직접 입력</option>
        </select>
        </div>
        
        <label 
          className={styles.label}
        >
            비밀번호
        </label>
        <input
          className={styles.input}
          type="text" 
        />
        <label 
          className={styles.label}
        >
            비밀번호 확인
        </label>
        <input
          className={styles.input}
          type="text" 
        />
        <label 
          className={styles.label}
        >
            이름
        </label>
        <input
          className={styles.input}
          type="text" 
        />
        <label 
          className={styles.label}
        >
            연락처
        </label>
        <input
          className={styles.input}
          type="text" 
        />
        <label 
          className={styles.label}
        >
            생년월일
        </label>
        <input
          className={styles.input}
          type="text" 
        />
        <form>
        <input type='checkbox' name='all_checked' value='all_agree' />모두 동의합니다.
        <br></br>
        <input type='checkbox' name='age_checked' value='age_check' />(필수) 본인은 만 14세 미만이 아닙니다.
        <br></br>
        <input type='checkbox' name='agree_checked' value='agree_check' />(필수) 이용약관에 동의합니다.
        <br></br>
        <input type='checkbox' name='personal_checked' value='personal_check' />(필수) 개인정보처리방침에 동의합니다.
        <br></br>
        <input type='checkbox' name='marketing_checked' value='marketing_agree' />(선택) 시향하다에서 제공하는 소식을 SMS, 이메일로 수신하겠습니다.
        <br></br>
        </form>
        <br></br>
        <button 
          type="button"
          className={styles.button}
        >
          회원가입
        </button>
      </div>
    </section>
  );
}

export default SignUp