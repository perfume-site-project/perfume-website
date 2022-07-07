import React from 'react';
import styles from '../assets/css/Order.module.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import Cart from '../Components/Cart';
import OrderPayment from '../Components/OrderPayment'

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