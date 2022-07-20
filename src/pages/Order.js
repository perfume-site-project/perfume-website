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
import OrderLogin from '../Components/Order/OrderLogin';

const Order = () => {
  return (
    <Wrapper>
      <Header />
      <div className={styles.container}>
        <Routes>
          <Route exact path="/" element={<OrderLogin />}></Route>
        </Routes>
        <Cart />
      </div>
    </Wrapper>
  );
}

export default Order