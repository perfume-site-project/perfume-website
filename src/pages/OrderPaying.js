import React from 'react';
import styles from '../assets/css/Order/Order.module.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Layout/Wrapper';
import Header from '../Components/Layout/Header';
import Cart from '../Components/Order/Cart';
import OrderPayment from '../Components/Order/OrderPayment'

const OrderPaying = () => {
  return (
    <Wrapper>
      <Header />
      <div className={styles.container}>
        <Routes>
          <Route exact path="/" element={<OrderPayment />}></Route>
          </Routes>
        <Cart />
      </div>
    </Wrapper>
  );
}

export default OrderPaying