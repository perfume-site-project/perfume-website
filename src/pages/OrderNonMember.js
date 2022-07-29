import React from 'react';
import styles from '../assets/css/Order/Order.module.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Layout/Wrapper';
import Header from '../Components/Layout/Header';
import Cart from '../Components/Order/Cart';
import OrderInfo from '../Components/Order/OrderInfo';

const OrderNonMember = ({ requestGet, orderInfo, saveInfo1 }) => {
  return (
    <Wrapper>
      <Header />
      <div className={styles.container}>
        <Routes>
        <Route exact path="/" element={<OrderInfo orderInfo={orderInfo} saveInfo1={saveInfo1}/>}></Route>
        </Routes>
        <Cart requestGet={requestGet} />
      </div>
    </Wrapper>
  );
}

export default OrderNonMember