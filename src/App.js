import './App.css';
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
import AdminAddProduct from './pages/AdminAddProduct';

function App() {
  const [userData, setUserData] = useState([]);
  // 로그인 상태 관리
  const [isLogin, setIsLogin] = useState(false);
  const [findId, setFindId] = useState(false);
  const [findPw, setFindPw] = useState(false);
  const [resetPw, setResetPw] = useState(false);
  const [files, setFiles] = useState([]);
  const [shippingInfo, setShippingInfo] = useState(false);
  const [orderInfo, setOrderInfo] = useState(false);


  // 로그인 상태 유지
  useEffect(() => {
    if(sessionStorage.getItem('user-email') === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [isLogin])

  // POST
  const requestPost = async (url, data) => {
    try {
      const options = {
        method: 'POST',
        url,
        data
      }
      const req = await axios(options);
      const res = req.data;
      // 로그인
      res.loginSuccess === true ? setIsLogin(true) : setIsLogin(false)
      return req;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  // 로그아웃 
  const onUserState = () => {
    if(sessionStorage.getItem('user-email' === null)) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }

  // 관리자 상품등록
  const onCreate = async (url, data) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    
    const blob = new Blob([JSON.stringify(data)], {type: "application/json"});
    formData.append("data", blob)

    await axios({
      method: 'POST',
      url,
      mode: 'cors',
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
              <Route exact path="/" element={<Main onUserState={onUserState} isLogin={isLogin}/>}/>
              <Route exact path="/user-login" element={<User requestPost={requestPost} onUserState={onUserState} />} />
              <Route exact path="/find-id" element={<UserFindId requestPost={requestPost} findId={findId} userData={userData}/>} />
              <Route exact path="/find-pw" element={<UserFindPw requestPost={requestPost} />} findPw={findPw} />
              <Route exact path="/reset-pw" element={<UserResetPw requestPost={requestPost} />} resetPw={resetPw} />
              <Route exact path="/product" element={<Product />}/>
              <Route exact path="/sign-up" element={<UserSignUp />}/>
              <Route exact path="/order" element={<Order />}/>
              <Route exact path="/order-non-member" element={<OrderNonMember requestPost={requestPost} orderInfo={orderInfo} />}/>
              <Route exact path="/order-shipping-info" element={<OrderShipping requestPost={requestPost} shippingInfo={shippingInfo} />}/>
              <Route exact path="/order-pay" element={<OrderPaying />}/>
              <Route exact path="/admin-add-product" element={<AdminAddProduct onCreate={onCreate} />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
