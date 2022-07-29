import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/css/Order/Cart.module.css';

const Cart = ({ requestGet }) => {
  
  const [cart, setCart] = useState({
    cart_view: []
  });
  const [total, setTotal] = useState(0)
  const [isValid, setIsValid] = useState(false);

  const userInfo = async () => {
      const infoUrl = 'users/info';
      const infoReq = await requestGet(infoUrl, false);
      setCart({
          cart_view: infoReq.data.cart_view,
      });
      setIsValid(true);
  }
  
  useEffect(() => {userInfo()}, []);

  useEffect(() => {
    howMuch()
  }, [isValid]);

  const howMuch = () => {
    let totalPrice = 0;
    cart.cart_view.forEach((element) => {
      totalPrice += element.price
    });
    setTotal(totalPrice * 1298)
  }

  return (
    <section className={styles.cart}>
      <div className={styles.cartContainer}>
        <h1 className={styles.title}>결제 내역</h1>
        <ul className={styles.list}>
            {cart.cart_view.map((data, idx) =>{
                return(
          <li className={styles.listItem}  key={idx}>
            <div className={styles.listItemImage}>
              <img src={data['productImage']}></img>
            </div>
            <div className={styles.listItemContainer}>
              <div className={styles.listItemInfo}>
                <h2 className={styles.listItemName}>{data['name']}</h2>
                <span className={styles.listItemDescription}>
                300ml / {data['count']}개
                </span>
              </div>
              <strong className={styles.listItemPrice}>{(data['price']*1298*data['count']).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</strong>
            </div>
          </li>
          )})}
        </ul>
        <div className={styles.payInfo}>
          <dl className={styles.payInfoList}>
            <dt className={styles.payInfoTitle}>주문금액</dt>
            <dd className={styles.payInfoPrice}>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</dd>
          </dl>
          <dl className={styles.payInfoList}>
            <dt className={styles.payInfoTitle}>배송비</dt>
            <dd className={styles.payInfoPrice}>+ 3000원</dd>
          </dl>
          <dl className={styles.payInfoList}>
            <dt className={styles.payInfoTitle}>할인 금액</dt>
            <dd className={styles.payInfoPrice}>- 0원</dd>
          </dl>
          <dl className={styles.payInfoList}>
            <dt className={styles.payInfoTitle}>총 금액</dt>
            <dd className={styles.payInfoPrice}>{(total+ 3000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Cart