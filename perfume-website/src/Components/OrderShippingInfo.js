import React from 'react';
import styles from '../assets/css/OrderShippingInfo.module.css';

const OrderShippingInfo = () => {
  return (
    <section className={styles.orderShippingInfo}>
      <h1 className={styles.srOnly}>배송정보</h1>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label htmlFor="userName" className={styles.label}>수령인</label>
          <input type="text" id="userName" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="phoneNumber" className={styles.label}>연락처</label>
          <input type="text" id="phoneNumber" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="address1" className={styles.label}>배송 주소</label>
          <div className={styles.addressContainer}>
            <input type="text" id="address1" placeholder="예) 서교동 아지오 빌딩, 와우산로" />
            <button type="button">검색</button>
          </div>
          <input type="text" id="address2" placeholder="상세 주소 입력" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="memo" className={styles.label}>배송 메모</label>
          <input type="text" id="memo" />
        </div>
        <button type="button" className={styles.button}>저장하고 다음 단계로</button>
      </div>
    </section>
  );
}

export default OrderShippingInfo