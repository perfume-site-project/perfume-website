import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/Cart.module.css';

const Cart = () => {
  return (
    <section className={styles.cart}>
      <div className={styles.cartContainer}>
        <h1 className={styles.title}>결제 내역</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.listItemImage}>
              {/* Link Imgage */}
            </div>
            <div className={styles.listItemContainer}>
              <div className={styles.listItemInfo}>
                <h2 className={styles.listItemName}>상품명1</h2>
                <span className={styles.listItemDescription}>
                300ml / 1개
                </span>
              </div>
              <strong className={styles.listItemPrice}>18,000원</strong>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.listItemImage}>
              {/* Link Imgage */}
            </div>
            <div className={styles.listItemContainer}>
              <div className={styles.listItemInfo}>
                <h2 className={styles.listItemName}>상품명1</h2>
                <span className={styles.listItemDescription}>
                300ml / 1개
                </span>
              </div>
              <strong className={styles.listItemPrice}>18,000원</strong>
            </div>
          </li>
        </ul>
        <div className={styles.payInfo}>
          <dl className={styles.payInfoList}>
            <dt className={styles.payInfoTitle}>주문금액</dt>
            <dd className={styles.payInfoPrice}>36,000원</dd>
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
            <dd className={styles.payInfoPrice}>39,000원</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Cart