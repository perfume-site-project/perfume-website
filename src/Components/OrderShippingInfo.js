import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/css/OrderShippingInfo.module.css';

const OrderShippingInfo = ({requestPost, shippingInfo}) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    userName: '',
    phoneNumber: '',
    address1: '',
    address2: '',
    memo: '',
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

  const handleShippingInfo = () => {
    navigate('/order-pay', {replace: true});

    /* DB가 구현되면 추가

    const url = 배송정보 url
    requestPost(url, state);
    if(shippingInfo === true) {
      navigate('/order-pay', {replace: true});
    } else {
      alert('배송 정보가 모두 입력되지 않았습니다.');
    }
    
    */
  }

  return (
    <section className={styles.orderShippingInfo}>
      <h1 className={styles.srOnly}>배송정보</h1>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="userName" className={styles.label}>수령인</label>
          <input
            id="userName"
            type="text"
            className={styles.input}
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
            className={styles.input}
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChangeState}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="address1" className={styles.label}>배송 주소</label>
          <div className={styles.addressContainer}>
            <input
              id="address1"
              type="text"
              placeholder="예) 서교동 아지오 빌딩, 와우산로"
              className={styles.input}
              name="address1"
              value={state.address1}
              onChange={handleChangeState}
            />
            <button type="button">검색</button>
          </div>
          <input
            id="address2"
            type="text"
            placeholder="상세 주소 입력"
            className={styles.input}
            name="address2"
            value={state.address2}
            onChange={handleChangeState}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="memo" className={styles.label}>배송 메모</label>
          <input
            id="memo"
            type="text"
            className={styles.input}
            name="memo"
            value={state.memo}
            onChange={handleChangeState}
          />
        </div>
        <button
          type="button"
          onClick={handleShippingInfo}
          className={styles.button}
        >
          저장하고 다음 단계로
        </button>
      </div>
    </section>
  );
}

export default OrderShippingInfo