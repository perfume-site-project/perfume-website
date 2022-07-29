import React from "react";
import { Link } from "react-router-dom";
import Login from "../User/Login";
import styles from "../../assets/css/Order/OrderLogin.module.css";

const OrderLogin = () => {
  return (
    <section className={styles.orderLogin}>
      <h1 className={styles.srOnly}>회원 비회원 결제</h1>
      <div className={styles.container}>
        <Login />
        <div>
          <Link to={"/order-non-member"}>
            <button type="button" className={styles.button}>
              비회원 주문하기
            </button>
          </Link>
          <div className={styles.links}>
            <Link to="/find-id" className={styles.link}>
              아이디 찾기
            </Link>
            <span>|</span>
            <Link to="/find-id" className={styles.link}>
              비밀번호 찾기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderLogin;
