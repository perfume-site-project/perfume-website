import React from 'react'; 
import styles from '../assets/css/OrderPayment.module.css';

const OrderPayment = () => {
  return (
    <section className={styles.orderPayment}>
      <h1 className={styles.srOnly}>결제수단</h1>
      <div className={styles.container}>
        <div className={styles.paymentContainer}>
          <button type="button" className={styles.paymentBtn}>실시간 계좌이체</button>
          <ul className={styles.checkboxContainer}>
            <li className={styles.checkList}>
              <input type="checkbox" id="allCheck" />
              <label htmlFor="allCheck">모두 동의합니다.</label>
            </li>
            <li className={styles.checkList}>
              <input type="checkbox" id="ageCheck" />
              <label htmlFor="ageCheck">(필수) 본인은 만 14세 미만이 아닙니다.</label>
            </li>
            <li className={styles.checkList}>
              <input type="checkbox" id="usingCheck" />
              <label htmlFor="usingCheck">(필수) 이용약관에 동의합니다.</label>
            </li>
            <li className={styles.checkList}>
              <input type="checkbox" id="infoCheck" />
              <label htmlFor="infoCheck">(필수) 개인정보처리방침 동의합니다.</label>
            </li>
            <li className={styles.checkList}>
              <input type="checkbox" id="productionCheck" />
              <label htmlFor="productionCheck">(동의) 위 주문의 상품, 가격, 배송정보에 동의합니다.</label>
            </li>
          </ul>
        </div>
        <button type="button" className={styles.payBtn}>결제하기</button>
      </div>
    </section>
  );
}

export default OrderPayment