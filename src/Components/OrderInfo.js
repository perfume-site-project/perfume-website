import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/OrderInfo.module.css';

const OrderInfo = ({requestPost, orderInfo}) => {
  const navigate = useNavigate();
  const [checkedButtons, setCheckedButtons] = useState([]);
  const [state, setState] = useState({
    email: '',
    domain: '',
    userName: '',
    phoneNumber: '',
  });

  const handleChangeState = (e) => {
    const target = e.target;
    setState(
      {
        ...state,
        [target.name]: target.value,
      }
    );
  }

  const handleDomain = (e) => {
    const target = e.target;
    setState(
      {
        ...state,
        domain: target.value,
      }
    );
  }

  const handleOrderInfo = () => {
    navigate('/order-shipping-info', {replace: true});

    /* DB가 구현되면 추가

    const url = 비회원정보 url
    requestPost(url, state);
    if(orderInfo === true) {
      navigate('/order-shipping-info', {replace: true});
    } else {
      alert('정보가 모두 입력되지 않았습니다.');
    }

    */
  }

  const changeHandler = (checked, id) => {
    if (checked) {
      if(id === 'allCheck'){
        setCheckedButtons([id, 'infoCheck', 'usingCheck']);
      }else{
        setCheckedButtons([...checkedButtons, id]);
        if(checkedButtons.length === 1){
          setCheckedButtons([...checkedButtons, id, 'allCheck']);
        }
      }
    } else {
      if(id === 'allCheck'){
        setCheckedButtons([]);
      }else{
        setCheckedButtons(checkedButtons.filter(button => (button !== id) && button !== 'allCheck'));
      }
    }
  };
  
  return (
    <section className={styles.orderInfo}>
      <h1 className={styles.srOnly}>
        비회원 정보
      </h1>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={styles.label}>이메일</label>
          <div>
            <input
              id="email"
              type="text"
              className={styles.email}
              name="email"
              value={state.email}
              onChange={handleChangeState}
            />
            <span>@</span>
            <input
              id="domain"
              name="domain"
              type="text"
              className={styles.domain}
              value={state.domain}
              onChange={handleChangeState}
            />
            <select onChange={handleDomain} className={styles.select}>
              <option value="default" selected="selected" disabled>옵션 선택</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="">직접 입력</option>
            </select>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="userName" className={styles.label}>이름</label>
          <input
            id="userName"
            type="text"
            className={styles.userName}
            name="userName"
            value={state.userName}
            onChange={handleChangeState}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="phoneNumber" className={styles.label}>연락처</label>
          <input
            id="phoneNumber"
            type="text"
            className={styles.phoneNumber}
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <ul className={styles.checkboxContainer}>
            <li>
              <input type="checkbox" id="allCheck"
                onChange={e => {
                  changeHandler(e.currentTarget.checked, 'allCheck');
                }}
                checked={checkedButtons.includes('allCheck') ? true : false}
              />
              <label htmlFor="allCheck">모두 동의합니다.</label>
            </li>
            <li>
              <input type="checkbox" id="infoCheck"
                onChange={e => {
                  changeHandler(e.currentTarget.checked, 'infoCheck');
                }}
                checked={checkedButtons.includes('infoCheck') ? true : false}
              />
              <label htmlFor="infoCheck">(필수) 개인정보처리방침 동의</label>
            </li>
            <li>
              <input type="checkbox" id="usingCheck"
                onChange={e => {
                  changeHandler(e.currentTarget.checked, 'usingCheck');
                }}
                checked={checkedButtons.includes('usingCheck') ? true : false}
              />
              <label htmlFor="usingCheck">(필수) 이용약관 동의</label>
            </li>
          </ul>
          <button
            type="button"
            onClick={handleOrderInfo}
            className={styles.button}
          >
              저장하고 다음 단계로
          </button>
        </div>
      </div>
    </section>
  );
}

export default OrderInfo;