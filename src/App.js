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
<<<<<<< HEAD
import UserInfoEdit from './pages/UserInfoEdit';

function App() {
  const [userData, setUserData] = useState([]);
  // 하나의 state로 관리 예정
  const [login, setLogin] = useState(false);
  const [findId, setFindId] = useState(false);
  const [findPw, setFindPw] = useState(false);
  const [resetPw, setResetPw] = useState(false);
=======
import ProductManagement from './pages/ProductManagement';
import AdminAddProduct from './pages/AdminAddProduct';
import AdminEditProduct from './pages/AdminEditProduct';

function App() {
  const [userData, setUserData] = useState([]);
  // 로그인 상태 관리
  const [isLogin, setIsLogin] = useState(false);
  const [editData, setEditData] = useState([]);
  const [findPw, setFindPw] = useState(false);
  const [resetPw, setResetPw] = useState(false);
  const [shippingInfo, setShippingInfo] = useState(false);
  const [orderInfo, setOrderInfo] = useState(false);
  //상품정보
  const [product, setProduct] = useState({
    image_link:{sub_images:[], main_image:''},
    review:[],
    _id:'',
    name:'',
    price:'',
    description:'',
    ingredient_description:'',
    tasting_note:'',
    __v:0
  });
>>>>>>> 47b72f8d84acb71da9bcde4a32d71f5c3663aa5a

  const requestPost = async (url, data) => {
    try {
      const options = {
        method: 'POST',
        url,
        data
      }
      const req = await axios(options);
      const res = req.data;
<<<<<<< HEAD
      console.log(res);
=======
      // 로그인
      res.loginSuccess === true ? setIsLogin(true) : setIsLogin(false)
      return req;
>>>>>>> 47b72f8d84acb71da9bcde4a32d71f5c3663aa5a
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

<<<<<<< HEAD
=======
  //Get
  const requestGet = async (url) => {
    try {
      const options = {
        method: 'GET',
        url
      }
      const req = await axios(options);
      const res = req.data;
      setProduct(() => res);
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

  // 상품 수정
  const onEditProduct = () => {
    // setEditData(향수이름, 가격, 상품정보, 성분...)
  }

>>>>>>> 47b72f8d84acb71da9bcde4a32d71f5c3663aa5a
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
<<<<<<< HEAD
              <Route exact path="/" element={<Main />}/>
              <Route exact path="/user-login" element={<User requestPost={requestPost} login={login} />} />
              <Route exact path="/find-id" element={<UserFindId requestPost={requestPost} findId={findId} userData={userData}/>} />
=======
              <Route exact path="/" element={<Main onUserState={onUserState} isLogin={isLogin} />}/>
              <Route exact path="/user-login" element={<User requestPost={requestPost} onUserState={onUserState} />} />
              <Route exact path="/find-id" element={<UserFindId requestPost={requestPost} />} />
>>>>>>> 47b72f8d84acb71da9bcde4a32d71f5c3663aa5a
              <Route exact path="/find-pw" element={<UserFindPw requestPost={requestPost} />} findPw={findPw} />
              <Route exact path="/reset-pw" element={<UserResetPw requestPost={requestPost} />} resetPw={resetPw} />
              <Route exact path="/:type" element={<Product requestPost={requestPost} requestGet={requestGet} product={product}/>}/>
              <Route exact path="/product" element={<Product />}/>
              <Route exact path="/sign-up" element={<UserSignUp requestPost={requestPost} />}/>
              <Route exact path="/editmemberinfo" element={<UserInfoEdit requestPost={requestPost} />}/>
              <Route exact path="/order" element={<Order />}/>
              <Route exact path="/order-non-member" element={<OrderNonMember />}/>
              <Route exact path="/order-shipping-info" element={<OrderShipping />}/>
              <Route exact path="/order-pay" element={<OrderPaying />}/>
<<<<<<< HEAD
=======
              <Route exact path="/product-management" element={<ProductManagement onEditProduct={onEditProduct}/>}/>
              <Route exact path="/product-add" element={<AdminAddProduct />}/>
              <Route exact path="/product-edit" element={<AdminEditProduct editData={editData} />}/>
>>>>>>> 47b72f8d84acb71da9bcde4a32d71f5c3663aa5a
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
