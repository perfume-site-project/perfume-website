import React from 'react';
import styles from '../assets/css/Order/Order.module.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Layout/Wrapper';
import Header from '../Components/Layout/Header';
import Cart from '../Components/Order/Cart';
import OrderShippingInfo from '../Components/Order/OrderShippingInfo';

const OrderShipping = ({requestPost, saveInfo2, resultInfo}) => {
  return (
    <Wrapper>
      <Header />
      <div className={styles.container}>
        <Routes>
        <Route exact path="/" element={<OrderShippingInfo requestPost={requestPost} saveInfo2={saveInfo2} resultInfo={resultInfo}/>}></Route>
        </Routes>
        <Cart />
      </div>
    </Wrapper>
  );
}

export default OrderShipping