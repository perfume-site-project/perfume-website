import './App.css';
import { useState } from 'react'; 
import axios from 'axios';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Component
import Main from "./Components/Main";
import Product from "./Components/Product";

// Pages
import User from './pages/User';
import UserFindId from './pages/UserFindId';
import UserFindPw from './pages/UserFindPw';
import UserSignUp from './pages/UserSignUp';
import Order from './pages/Order';
import OrderNonMember from './pages/OrderNonMember';
import OrderShipping from './pages/OrderShipping';
import OrderPaying from './pages/OrderPaying';
import UserResetPw from './pages/UserResetPw';

function App() {
  const [userData, setUserData] = useState([]);
  // 하나의 state로 관리 예정
  const [login, setLogin] = useState(false);
  const [findId, setFindId] = useState(false);
  const [findPw, setFindPw] = useState(false);
  const [resetPw, setResetPw] = useState(false);
  const [shippingInfo, setShippingInfo] = useState(false);
  const [orderInfo, setOrderInfo] = useState(false);

  const requestPost = async (url, data) => {
    try {
      const options = {
        method: 'POST',
        url,
        data
      }
      const req = await axios(options);
      const res = req.data;
      console.log(res);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
              <Route exact path="/" element={<Main />}/>
              <Route exact path="/user-login" element={<User requestPost={requestPost} login={login} />} />
              <Route exact path="/find-id" element={<UserFindId requestPost={requestPost} findId={findId} userData={userData}/>} />
              <Route exact path="/find-pw" element={<UserFindPw requestPost={requestPost} />} findPw={findPw} />
              <Route exact path="/reset-pw" element={<UserResetPw requestPost={requestPost} />} resetPw={resetPw} />
              <Route exact path="/product" element={<Product />}/>
              <Route exact path="/sign-up" element={<UserSignUp />}/>
              <Route exact path="/order" element={<Order />}/>
              <Route exact path="/order-non-member" element={<OrderNonMember requestPost={requestPost} orderInfo={orderInfo} />}/>
              <Route exact path="/order-shipping-info" element={<OrderShipping requestPost={requestPost} shippingInfo={shippingInfo} />}/>
              <Route exact path="/order-pay" element={<OrderPaying />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
