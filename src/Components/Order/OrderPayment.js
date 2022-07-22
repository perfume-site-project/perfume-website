import React, { useState } from 'react';
import styles from '../../assets/css/Order/OrderPayment.module.css';

const OrderPayment = () => {
  const [checkedButtons, setCheckedButtons] = useState([]);

  const changeHandler = (checked, id) => {
    if (checked) {
      if(id === 'allCheck'){
        setCheckedButtons([id, 'ageCheck', 'usingCheck', 'infoCheck', 'productionCheck']);
      }else{
        setCheckedButtons([...checkedButtons, id]);
        if(checkedButtons.length === 3){
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
    <section className={styles.orderPayment}>
      <h1 className={styles.srOnly}>결제수단</h1>
      <div className={styles.container}>
        <div className={styles.paymentContainer}>
          <button type="button" className={styles.paymentBtn}>실시간 계좌이체</button>
          <ul className={styles.checkboxContainer}>
            <li className={styles.checkList}>
              <input type="checkbox" id="allCheck"
                onChange={e => {
                  changeHandler(e.currentTarget.checked, 'allCheck');
                }}
                checked={checkedButtons.includes('allCheck') ? true : false}
              />
              <label htmlFor="allCheck">모두 동의합니다.</label>
            </li>
            <li className={styles.checkList}>
              <input type="checkbox" id="ageCheck"
                onChange={e => {
                  changeHandler(e.currentTarget.checked, 'ageCheck');
                }}
                checked={checkedButtons.includes('ageCheck') ? true : false}
              />
              <label htmlFor="ageCheck">(필수) 본인은 만 14세 미만이 아닙니다.</label>
            </li>
            <li className={styles.checkList}>
              <input type="checkbox" id="usingCheck"
                onChange={e => {
                  changeHandler(e.currentTarget.checked, 'usingCheck');
                }}
                checked={checkedButtons.includes('usingCheck') ? true : false} />
              <label htmlFor="usingCheck">(필수) 이용약관에 동의합니다.</label>
            </li>
            <li className={styles.checkList}>
              <input type="checkbox" id="infoCheck"
                onChange={e => {
                  changeHandler(e.currentTarget.checked, 'infoCheck');
                }}
                checked={checkedButtons.includes('infoCheck') ? true : false}
              />
              <label htmlFor="infoCheck">(필수) 개인정보처리방침 동의합니다.</label>
            </li>
            <li className={styles.checkList}>
              <input type="checkbox" id="productionCheck"
                onChange={e => {
                  changeHandler(e.currentTarget.checked, 'productionCheck');
                }}
                checked={checkedButtons.includes('productionCheck') ? true : false}
              />
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