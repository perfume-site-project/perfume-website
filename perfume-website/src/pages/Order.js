import React from 'react';
import styles from '../assets/css/Order.module.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Cart from '../components/Cart';
import OrderLogin from '../components/OrderLogin';

const Order = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <div className={styles.container}>
          <Routes>
            <Route exact path="/order" element={<OrderLogin />}></Route>
          </Routes>
          <Cart />
        </div>
      </Wrapper>
    </BrowserRouter>
  );
}

export default Order