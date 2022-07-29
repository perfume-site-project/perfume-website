import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../../assets/css/User/FindId.module.css";

const SignUp = ({ requestPost }) => {
  const navigate = useNavigate();

  const [checkedButtons, setCheckedButtons] = useState([]);
  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
    phone_number: "",
    birthday: "",
  });

  const [email, setEmail] = useState({
    first: "",
    last: "",
  });

  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setState({
      ...state,
      email: email.first + "@" + email.last,
    });
  }, [email.first, email.last]);

  useEffect(() => {
    setState({
      ...state,
      password: password.password,
    });
  }, [password.password]);

  const handleChangeState = (e) => {
    const target = e.target;
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handleEmailState = (e) => {
    const target = e.target;
    setEmail({
      ...email,
      [target.name]: target.value,
    });
  };

  const handlePasswordState = (e) => {
    const target = e.target;
    setPassword({
      ...password,
      [target.name]: target.value,
    });
  };

  const handleDomainSelect = (e) => {
    const target = e.target;
    setEmail({
      ...state,
      last: target.value,
    });
  };

  const handleSignUp = async () => {
    const blank = checkBlank(); //빈칸 체크
    const pw = checkPassword(); //비밀번호 확인 체크
    const box = checkBox(); //필수항목 체크

    if (blank && pw && box) {
      const url = "/users/register";
      const req = await requestPost(url, state);

      if (req.data.success) {
        alert("회원가입이 완료되었습니다. 다시 로그인 해주세요.");
        navigate("/", { replace: true });
      }
    } else {
      alert("회원가입에 실패하였습니다.");
    }
  };

  const checkPassword = () => {
    const pw = password.password;
    const confirmPw = password.confirmPassword;
    if (pw === "" || pw !== confirmPw) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    } else {
      return true;
    }
  };

  const checkBlank = () => {
    for (const key in state) {
      if (state[key] === "") {
        alert("모든 칸을 채워주세요.");
        return false;
      }
    }
    return true;
  };

  const checkBox = () => {
    const checkbox =
      checkedButtons.includes("ageCheck") &&
      checkedButtons.includes("agreeCheck") &&
      checkedButtons.includes("personalCheck");
    if (checkbox === false) {
      alert("필수 항목들이 모두 체크되지 않았습니다.");
      return false;
    } else {
      return true;
    }
  };

  const changeHandler = (checked, id) => {
    if (checked) {
      if (id === "allCheck") {
        setCheckedButtons([id, "ageCheck", "agreeCheck", "personalCheck", "marketingCheck"]);
      } else {
        setCheckedButtons([...checkedButtons, id]);
        if (checkedButtons.length === 3) {
          setCheckedButtons([...checkedButtons, id, "allCheck"]);
        }
      }
    } else {
      if (id === "allCheck") {
        setCheckedButtons([]);
      } else {
        setCheckedButtons(checkedButtons.filter((button) => button !== id && button !== "allCheck"));
      }
    }
  };

  return (
    <section className={styles.findId}>
      <h1 className={styles.srOnly}>아이디</h1>
      <div className={styles.container}>
        <label className={styles.label}>아이디</label>
        <div>
          <input
            className={styles.input}
            id="first"
            name="first"
            type="text"
            value={email.first}
            onChange={handleEmailState}
          />
          <span> @ </span>
          <input
            className={styles.input}
            id="last"
            name="last"
            type="text"
            value={email.last}
            onChange={handleEmailState}
          />
          <span> </span>
          <select className={styles.input} name="language" onChange={handleDomainSelect}>
            <option value="">선택</option>
            <option value="naver.com">naver.com</option>
            <option value="daum.net">daum.net</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="nate.com">nate.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="hotmail.com">hotmail.com</option>
            <option value="hanmir.com">hanmir.com</option>
            <option value="dreamwiz.com">dreamwiz.com</option>
            <option value="lycos.co.kr">lycos.co.kr</option>
            <option value="empas.com">empas.com</option>
            <option value="">직접 입력</option>
          </select>
        </div>

        <label className={styles.label}>비밀번호</label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          value={password.password}
          onChange={handlePasswordState}
        />
        <label className={styles.label}>비밀번호 확인</label>
        <input
          className={styles.input}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={password.confirmPassword}
          onChange={handlePasswordState}
        />
        <label className={styles.label}>이름</label>
        <input className={styles.input} type="text" name="name" value={state.name} onChange={handleChangeState} />
        <label className={styles.label}>연락처</label>
        <input
          className={styles.input}
          type="text"
          name="phone_number"
          placeholder="'-' 없이 숫자만 입력"
          value={state.phone_number}
          onChange={handleChangeState}
        />
        <label className={styles.label}>생년월일</label>
        <input
          className={styles.input}
          type="text"
          name="birthday"
          placeholder="ex) 1999-01-01"
          value={state.birthday}
          onChange={handleChangeState}
        />
        <form>
          <input
            type="checkbox"
            name="all_checked"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, "allCheck");
            }}
            checked={checkedButtons.includes("allCheck") ? true : false}
          />
          <label htmlFor="allCheck">모두 동의합니다.</label>
          <br></br>
          <input
            type="checkbox"
            id="ageCheck"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, "ageCheck");
            }}
            checked={checkedButtons.includes("ageCheck") ? true : false}
          />
          <label htmlFor="ageCheck">(필수) 본인은 만 14세 미만이 아닙니다.</label>
          <br></br>
          <input
            type="checkbox"
            id="agreeCheck"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, "agreeCheck");
            }}
            checked={checkedButtons.includes("agreeCheck") ? true : false}
          />
          <label htmlFor="agreeCheck">(필수) 이용약관에 동의합니다.</label>
          <br></br>
          <input
            type="checkbox"
            id="personalCheck"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, "personalCheck");
            }}
            checked={checkedButtons.includes("personalCheck") ? true : false}
          />
          <label htmlFor="personalCheck">(필수) 개인정보처리방침에 동의합니다.</label>
          <br></br>
          <input
            type="checkbox"
            id="marketingCheck"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, "marketingCheck");
            }}
            checked={checkedButtons.includes("marketingCheck") ? true : false}
          />
          <label htmlFor="marketingCheck">(선택) 시향하다에서 제공하는 소식을 SMS, 이메일로 수신하겠습니다.</label>
          <br></br>
        </form>
        <br></br>
        <button type="button" className={styles.button} onClick={handleSignUp}>
          회원가입
        </button>
      </div>
    </section>
  );
};

export default SignUp;
