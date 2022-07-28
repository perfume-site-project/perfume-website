import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/css/Order/OrderShippingInfo.module.css';

const OrderShippingInfo = ({requestPost, shippingInfo, saveInfo2, resultInfo}) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    receiver: '',
    receiver_phone_number: '',
    address: '',
    message: '',
  });
  const [address, setAddress] = useState({
    address1: '',
    address2: '',
  })

  const handleChangeState = (e) => {
    const target = e.target;
    setState(
      {
        ...state,
        [target.name]: target.value,
      }
    );
  }

  const handleAddress =(e) => {
    const target = e.target;
    setAddress(
      {
        ...address,
        [target.name]: target.value,
      }
    )
  }

  useEffect(()=>{
    setState({
        ...state,
        address: address.address1+' '+address.address2,
    })
  },[address.address1, address.address2])

  const handleShippingInfo = () => {
    saveInfo2(state.receiver, state.receiver_phone_number, state.address, state.message);
    if(state.receiver!=="" && state.receiver_phone_number!=="" && state.address!=="" && state.message!=="") {
      navigate('/order-pay', {replace: true});
    }else{
      alert("오류");
    }

    resultInfo();
    
    /*
    const url = 'users/purchase';
    requestPost(url, state);
    */
  }

  return (
    <section className={styles.orderShippingInfo}>
      <h1 className={styles.srOnly}>배송정보</h1>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="receiver" className={styles.label}>수령인</label>
          <input
            id="receiver"
            type="text"
            className={styles.input}
            name="receiver"
            value={state.receiver}
            onChange={handleChangeState}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="receiver_phone_number" className={styles.label}>연락처</label>
          <input
            id="receiver_phone_number"
            type="text"
            className={styles.input}
            name="receiver_phone_number"
            placeholder="'-' 없이 숫자만 입력"
            value={state.receiver_phone_number}
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
              value={address.address1}
              onChange={handleAddress}
            />
            <button type="button">검색</button>
          </div>
          <input
            id="address2"
            type="text"
            placeholder="상세 주소 입력"
            className={styles.input}
            name="address2"
            value={address.address2}
            onChange={handleAddress}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="message" className={styles.label}>배송 메모</label>
          <input
            id="message"
            type="text"
            className={styles.input}
            name="message"
            value={state.message}
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