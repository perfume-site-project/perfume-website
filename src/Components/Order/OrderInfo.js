import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/css/Order/OrderInfo.module.css";

const OrderInfo = ({ orderInfo, saveInfo1 }) => {
  const navigate = useNavigate();
  const [checkedButtons, setCheckedButtons] = useState([]);
  const [state, setState] = useState({
    email: "",
    name: "",
    phone_number: "",
  });

  const [email, setEmail] = useState({
    first: "",
    last: "",
  });

  useEffect(() => {
    setState({
      ...state,
      email: email.first + "@" + email.last,
    });
  }, [email.first, email.last]);

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

  const handleDomainSelect = (e) => {
    const target = e.target;
    setEmail({
      ...email,
      last: target.value,
    });
  };

  const handleOrderInfo = () => {
    console.log(state);
    saveInfo1(state.name, state.email, state.phone_number);

    if (email.first !== "" && email.last !== "" && state.name !== "" && state.phone_number !== "") {
      var regEmail = /^[0-9a-zA-Z]*$/;

      if (regEmail.test(email.first)) {
        if (checkedButtons.includes("allCheck")) {
          navigate("/order-shipping-info", { replace: true });
        } else {
          alert("필수 항목들이 모두 체크되지 않았습니다.");
        }
      } else {
        alert("이메일은 영어와 숫자로만 이루어져있습니다.");
      }
    } else {
      alert("정보가 모두 입력되지 않았습니다.");
    }
  };

  const changeHandler = (checked, id) => {
    if (checked) {
      if (id === "allCheck") {
        setCheckedButtons([id, "infoCheck", "usingCheck"]);
      } else {
        setCheckedButtons([...checkedButtons, id]);
        if (checkedButtons.length === 1) {
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
    <section className={styles.orderInfo}>
      <h1 className={styles.srOnly}>비회원 정보</h1>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={styles.label}>
            이메일
          </label>
          <div>
            <input
              id="first"
              name="first"
              type="text"
              className={styles.email}
              value={email.first}
              onChange={handleEmailState}
            />
            <span>@</span>
            <input
              id="last"
              name="last"
              type="text"
              className={styles.domain}
              value={email.last}
              onChange={handleEmailState}
            />
            <select onChange={handleDomainSelect} className={styles.select}>
              <option value="default" selected="selected" disabled>
                옵션 선택
              </option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="">직접 입력</option>
            </select>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.label}>
            이름
          </label>
          <input
            id="name"
            type="text"
            className={styles.userName}
            name="name"
            value={state.name}
            onChange={handleChangeState}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="phone_number" className={styles.label}>
            연락처
          </label>
          <input
            id="phone_number"
            type="text"
            className={styles.phoneNumber}
            name="phone_number"
            placeholder="'-' 없이 숫자만 입력"
            value={state.phone_number}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <ul className={styles.checkboxContainer}>
            <li>
              <input
                type="checkbox"
                id="allCheck"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, "allCheck");
                }}
                checked={checkedButtons.includes("allCheck") ? true : false}
              />
              <label htmlFor="allCheck">모두 동의합니다.</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="infoCheck"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, "infoCheck");
                }}
                checked={checkedButtons.includes("infoCheck") ? true : false}
              />
              <label htmlFor="infoCheck">(필수) 개인정보처리방침 동의</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="usingCheck"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, "usingCheck");
                }}
                checked={checkedButtons.includes("usingCheck") ? true : false}
              />
              <label htmlFor="usingCheck">(필수) 이용약관 동의</label>
            </li>
          </ul>
          <button type="button" onClick={handleOrderInfo} className={styles.button}>
            저장하고 다음 단계로
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderInfo;
