import React from 'react';
import styles from '../assets/css/Order.module.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import Cart from '../Components/Cart';
import OrderInfo from '../Components/OrderInfo';

const OrderNonMember = ({ orderInfo, saveInfo1 }) => {
  return (
    <Wrapper>
      <Header />
      <div className={styles.container}>
        <Routes>
        <Route exact path="/" element={<OrderInfo orderInfo={orderInfo} saveInfo1={saveInfo1}/>}></Route>
        </Routes>
        <Cart />
      </div>
    </Wrapper>
  );
}

export default OrderNonMember