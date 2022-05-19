import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <h1>결제 내역</h1>
      <ul>
        <li>
          <div>
            <Link>
              <img src="" alt="" />
            </Link>
          </div>
          <div>
            <div>
              <h2>상품명1</h2>
              <strong></strong>
            </div>
            <span>
              300ml / 1개
            </span>
          </div>
        </li>
      </ul>
      <div>
        <dl>
          <dt>주문금액</dt>
          <dd></dd>
        </dl>
        <dl>
          <dt>배송비</dt>
          <dd></dd>
        </dl>
        <dl>
          <dt>할인 금액</dt>
          <dd></dd>
        </dl>
        <dl>
          <dt>총 금액</dt>
          <dd></dd>
        </dl>
      </div>
    </div>
  );
}

export default Cart;