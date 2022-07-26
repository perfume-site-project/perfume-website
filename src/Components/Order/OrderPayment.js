import React, { useState, useEffect } from "react";
import styles from "../../assets/css/Order/OrderPayment.module.css";

const OrderPayment = () => {
  const [checkedButtons, setCheckedButtons] = useState([]);

  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const changeHandler = (checked, id) => {
    if (checked) {
      if (id === "allCheck") {
        setCheckedButtons([
          id,
          "ageCheck",
          "usingCheck",
          "infoCheck",
          "productionCheck",
        ]);
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
        setCheckedButtons(
          checkedButtons.filter(
            (button) => button !== id && button !== "allCheck"
          )
        );
      }
    }
  };

  const callback = (res) => {
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amount,
      status,
    } = res;
    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };

  const payment = () => {
    const { IMP } = window;
    IMP.init("imp76884582");
    const data = {
      pg: "html5_inicis",
      pay_method: "card",
      merchant_uid: `mid_${new Date().getTime()}`,
      name: "결제 테스트",
      amount: "1000",
      custom_data: { name: "부가정보", desc: "세부 부가정보" },
      buyer_name: "홍길동",
      buyer_tel: "01000000000",
      buyer_email: "example@gmail.com",
      buyer_addr: "주소",
      buyer_postalcode: "우편번호",
    };
    IMP.request_pay(data, callback);
  };

  const onClickPayment = () => {
    const res = checkedButtons.filter((item) => item === "allCheck");
    if (res[0] === undefined) {
      alert("모든 약관에 동의하시기 바랍니다.");
      return;
    }
    payment();
  };

  return (
    <section className={styles.orderPayment}>
      <h1 className={styles.srOnly}>결제수단</h1>
      <div className={styles.container}>
        <div className={styles.paymentContainer}>
          <ul className={styles.checkboxContainer}>
            <li className={styles.checkList}>
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
            <li className={styles.checkList}>
              <input
                type="checkbox"
                id="ageCheck"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, "ageCheck");
                }}
                checked={checkedButtons.includes("ageCheck") ? true : false}
              />
              <label htmlFor="ageCheck">
                (필수) 본인은 만 14세 미만이 아닙니다.
              </label>
            </li>
            <li className={styles.checkList}>
              <input
                type="checkbox"
                id="usingCheck"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, "usingCheck");
                }}
                checked={checkedButtons.includes("usingCheck") ? true : false}
              />
              <label htmlFor="usingCheck">(필수) 이용약관에 동의합니다.</label>
            </li>
            <li className={styles.checkList}>
              <input
                type="checkbox"
                id="infoCheck"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, "infoCheck");
                }}
                checked={checkedButtons.includes("infoCheck") ? true : false}
              />
              <label htmlFor="infoCheck">
                (필수) 개인정보처리방침 동의합니다.
              </label>
            </li>
            <li className={styles.checkList}>
              <input
                type="checkbox"
                id="productionCheck"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, "productionCheck");
                }}
                checked={
                  checkedButtons.includes("productionCheck") ? true : false
                }
              />
              <label htmlFor="productionCheck">
                (동의) 위 주문의 상품, 가격, 배송정보에 동의합니다.
              </label>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className={styles.payBtn}
          onClick={onClickPayment}
        >
          결제하기
        </button>
      </div>
    </section>
  );
};

export default OrderPayment;
