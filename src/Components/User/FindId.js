import React, { useState, useRef } from "react";
import styles from "../../assets/css/User/FindId.module.css";

const FindId = ({ requestPost }) => {
  const userPhoneNumberInput = useRef();

  const [state, setState] = useState({
    phoneNumber: "",
  });

  const handleChangePhoneNumber = (e) => {
    const target = e.target;
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handleKeyUp = () => {
    if (window.event.keyCode === 13) {
      handleFindId();
    }
  };

  const handleFindId = async () => {
    if (state.phoneNumber.length < 1) {
      alert("연락처를 입력해주세요.");
      userPhoneNumberInput.current.focus();
      return;
    }

    const url = "/users/findid";
    const req = await requestPost(url, state);

    if (req.data.email === undefined) {
      alert("일치하는 사용자의 정보가 없습니다.");
      return;
    }

    if (req.data.email !== "") {
      alert(`사용자의 아이디는 ${req.data.email} 입니다.`);
    }
  };

  return (
    <section className={styles.findId}>
      <h1 className={styles.srOnly}>아이디 찾기</h1>
      <div className={styles.container}>
        <label htmlFor="phoneNumber" className={styles.label}>
          연락처
        </label>
        <input
          className={styles.input}
          id="phoneNumber"
          type="text"
          name="phoneNumber"
          placeholder="010-XXXX-XXXX"
          value={state.phoneNumber}
          ref={userPhoneNumberInput}
          onKeyUp={handleKeyUp}
          onChange={handleChangePhoneNumber}
        />
        <p className={styles.description}>
          회원가입 시 입력한 연락처를 입력해주십시오.
          <br />
          인증을 통해 아이디(E-mail)를 찾을 수 있습니다.
        </p>
        <button type="button" onClick={handleFindId} className={styles.button}>
          확인
        </button>
      </div>
    </section>
  );
};

export default FindId;
