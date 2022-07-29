import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/css/User/FindPw.module.css";

const FindPw = ({ requestPost, onResetUserPw }) => {
  const navigate = useNavigate();

  const userEmailInput = useRef();
  const userPhoneNumberInput = useRef();
  const userCodeInput = useRef();

  const [state, setState] = useState({
    email: "",
    phone_number: "",
  });
  const [certification, setCertification] = useState({
    email: "",
    code: "",
  });
  const [isCertification, setIsCertification] = useState(false);

  const handleChangeState = (e) => {
    const target = e.target;
    setState({
      ...state,
      [target.name]: target.value,
    });
    setCertification({
      ...certification,
      email: state.email,
    });
  };

  const handleChangePhoneNumber = () => {
    const newPhoneNumber = state.phone_number.replace(/-/g, "");
    setState({
      ...state,
      phone_number: newPhoneNumber,
    });
  };

  const handleChangeCode = (e) => {
    const target = e.target;
    setCertification({
      ...certification,
      [target.name]: target.value,
    });
  };

  const handleKeyUp = () => {
    if (window.event.keyCode === 13) {
      isCertification ? handleCertification() : handleFindPw();
    }
  };

  const handleFindPw = async () => {
    if (state.email.length < 1) {
      alert("이메일을 입력해주세요.");
      userEmailInput.current.focus();
      return;
    }

    if (state.phone_number.length < 1) {
      alert("연락처를 입력해주세요.");
      userPhoneNumberInput.current.focus();
    }

    handleChangePhoneNumber();

    const url = "/users/findpw";
    const res = await requestPost(url, state);
    if (res.data.success === false) {
      alert("회원 정보가 없습니다.");
      setIsCertification(false);
    } else {
      alert("인증번호를 보냈습니다.");
      setIsCertification(true);
    }
  };

  const handleCertification = async () => {
    if (certification.code.length < 1) {
      alert("인증번호를 입력해주세요.");
      userCodeInput.current.focus();
    }

    const url = "/users/findpwcode";
    const res = await requestPost(url, certification);
    if (res.data.success === false) {
      alert("인증번호가 일치하지 않습니다.");
    } else {
      alert("인증번호가 일치합니다. 비밀번호 재설정 페이지로 이동합니다.");
      onResetUserPw(certification);
      navigate("/reset-pw", { replace: true });
    }
  };

  return (
    <section className={styles.findPw}>
      <h1 className={styles.srOnly}>비밀번호 찾기</h1>
      <div className={styles.container}>
        <label htmlFor="email" className={styles.label}>
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
          onChange={handleChangeState}
        />
        <label htmlFor="phone_number" className={styles.label}>
          연락처
        </label>
        <input
          className={styles.input}
          id="phone_number"
          type="text"
          name="phone_number"
          value={state.phone_number}
          placeholder="010-XXXX-XXXX"
          ref={userPhoneNumberInput}
          onKeyUp={handleKeyUp}
          onChange={handleChangeState}
        />
        <p className={styles.description}>
          회원가입 시 입력한 아이디(이메일 주소)와 연락처를 입력해주십시오.
          <br />
          해당 연락처로 인증코드 보내드릴 예정입니다.
        </p>
        <button type="button" onClick={handleFindPw} className={styles.button}>
          인증번호 전송
        </button>
        {isCertification === true && (
          <div className={styles.container}>
            <label htmlFor="code" className={styles.label}>
              인증번호
            </label>
            <input
              className={styles.input}
              id="code"
              type="text"
              name="code"
              value={certification.code}
              ref={userCodeInput}
              onKeyUp={handleKeyUp}
              onChange={handleChangeCode}
            />
            <p className={styles.description}>해당 연락처로 인증코드를 보냈습니다. 인증코드를 입력해주십시오.</p>
            <button type="button" className={styles.button} onClick={handleCertification}>
              인증번호 확인
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FindPw;
