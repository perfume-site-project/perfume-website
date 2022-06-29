import './App.css';
import { useState } from 'react'; 
import axios from 'axios';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Components/Main";
import Product from "./Components/Product";
import User from './pages/User';
import UserFindId from './pages/UserFindId';
import UserFindPw from './pages/UserFindPw';
import UserSignUp from './pages/UserSignUp';
import Order from './pages/Order';
import OrderNonMember from './pages/OrderNonMember';
import OrderShipping from './pages/OrderShipping';
import OrderPaying from './pages/OrderPaying';

function App() {
  const [userData, setUserData] = useState([]);
  const [login, setLogin] = useState(false);
  const [findId, setFindId] = useState(false);

  const requestPost = async (url, data) => {
    try {
      const options = {
        method: 'POST',
        url,
        data
      }
      const res = await axios(options);
      console.log(res);
      // 응답값의 키값에 따라서 case문을 작성하여 state에 할당한다.
      return res.data;
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
              <Route exact path="/find-pw" element={<UserFindPw requestPost={requestPost} />}/>
              <Route exact path="/product" element={<Product />}/>
              <Route exact path="/sign-up" element={<UserSignUp />}/>
              <Route exact path="/order" element={<Order />}/>
              <Route exact path="/order-non-member" element={<OrderNonMember />}/>
              <Route exact path="/order-shipping-info" element={<OrderShipping />}/>
              <Route exact path="/order-pay" element={<OrderPaying />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
