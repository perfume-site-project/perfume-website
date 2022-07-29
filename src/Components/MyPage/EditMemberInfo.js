import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../assets/css/Mypage/EditMemberInfo.module.css";

const EditMemberInfo = ({ requestPost, requestGet }) => {
  const [nowEmail, setEmail] = useState();
  const [nowContact, setContact] = useState();
  const [check, setCheck] = useState(true);
  const [state, setState] = useState({
    id: "",
    domain: "",
    email: "",
    password: "",
    confirmPasswd: "",
    name: "",
    phone_number: "",
    birthDate: "",
  });

  const handleChangeState = (e) => {
    const target = e.target;
    if (target.value != "") {
      setState({
        ...state,
        [target.name]: target.value,
      });
    }
  };

  const handleDomainSelect = (e) => {
    const target = e.target;
    setState({
      ...state,
      domain: target.value,
    });
  };

  const handleUpdate = () => {
    checkPassword(); //비밀번호 확인 체크
    if (!check) return;
    const url = "/users/update";
    requestPost(url, state);
  };

  const checkPassword = () => {
    const pw = state.password;
    const confirmPw = state.confirmPasswd;
    if (pw !== confirmPw) {
      alert("비밀번호가 일치하지 않습니다.");
      setCheck(false);
    }
  };

  //   const checkBlank = () => {
  //     for(const key in state){
  //         if(state[key] === ""){
  //             alert('모든 칸을 채워주세요.');
  //             setCheck(false);
  //             break;
  //         }
  //     }
  // }

  useEffect(() => {
    setState({
      ...state,
      email: state.id + "@" + state.domain,
    });
  }, [state.id, state.domain]);

  const getInfo = async () => {
    const url = "/users/info";
    const req = await requestGet(url);
    setEmail(req.data.email);
    setContact(req.data.phone_number);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <section className={styles.EditMemberInfo}>
      <h1 className={styles.srOnly}>아이디</h1>
      <div className={styles.container}>
        <label className={styles.label}>현재 아이디</label>
        <input className={styles.input} type="text" id="userId" name="id" value={nowEmail} />
        <label className={styles.label}>새 아이디</label>
        <div>
          <input
            className={styles.input}
            type="text"
            id="userId"
            name="id"
            value={state.id}
            onChange={handleChangeState}
          />
          <span> @ </span>
          <input
            className={styles.input}
            type="text"
            id="userDomain"
            name="domain"
            value={state.domain}
            onChange={handleChangeState}
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
        <label className={styles.label}>새 비밀번호</label>
        <input
          className={styles.input}
          type="password"
          name="password"
          autocomplete="no"
          value={state.password}
          onChange={handleChangeState}
        />
        <label className={styles.label}>비밀번호 확인</label>
        <input
          className={styles.input}
          type="password"
          name="confirmPasswd"
          value={state.confirmPasswd}
          onChange={handleChangeState}
        />
        <label className={styles.label}>연락처</label>
        <input
          className={styles.input}
          type="text"
          name="phone_number"
          //value={state.phone_number}
          value={nowContact}
          onChange={handleChangeState}
        />

        <br></br>
        <div>
          <button type="button" className={styles.button} onClick={handleUpdate}>
            수정
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditMemberInfo;
