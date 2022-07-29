import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Component
import Main from "./Components/Main/Main";
import Product from "./Components/Product/Product";

// Pages
import User from "./pages/User";
import UserFindId from "./pages/UserFindId";
import UserFindPw from "./pages/UserFindPw";
import UserSignUp from "./pages/UserSignUp";
import Order from "./pages/Order";
import OrderNonMember from "./pages/OrderNonMember";
import OrderShipping from "./pages/OrderShipping";
import OrderPaying from "./pages/OrderPaying";
import UserResetPw from "./pages/UserResetPw";
import ProductManagement from "./pages/ProductManagement";
import AdminAddProduct from "./pages/AdminAddProduct";
import UserMyPage from "./pages/UserMyPage";
import AdminEditProduct from "./pages/AdminEditProduct";
import UserInfoEdit from "./pages/UserInfoEdit";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [editData, setEditData] = useState({});
  const [shippingInfo, setShippingInfo] = useState(false);
  const [orderInfo, setOrderInfo] = useState(false);
  const [info1, setInfo1] = useState({});
  const [info2, setInfo2] = useState({});
  const [cart, setCart] = useState([]);
  const [resInfo, setResInfo] = useState({});
  const [resetPw, setResetPw] = useState({});
  const [product, setProduct] = useState({
    image_link: { sub_images: [], main_image: "" },
    review: [],
    _id: "",
    name: "",
    price: "",
    description: "",
    ingredient_description: "",
    tasting_note: "",
    __v: 0,
  });
  const [allProduct, setAllProduct] = useState([]);
  const [isValid, setIsValid] = useState(false);

  // 로그인 상태 유지
  useEffect(() => {
    if (sessionStorage.getItem("user-email") === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [isLogin]);

  // 모든 상품 정보 불러오기
  useEffect(() => {
    const url = "/allproduct";
    requestGet(url, true);
  }, []);

  // POST
  const requestPost = async (url, data) => {
    try {
      const options = {
        method: "POST",
        url,
        data,
      };
      const req = await axios(options);
      const res = req.data;
      // 로그인
      res.loginSuccess === true ? setIsLogin(true) : setIsLogin(false);
      return req;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  // GET
  const requestGet = async (url, all) => {
    try {
      const options = {
        method: "GET",
        url,
      };
      const req = await axios(options);
      const res = req.data;
      !all && setProduct(() => res);
      all && setAllProduct(() => res);
      //console.log(res);
      return req;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  // 로그아웃
  const onUserState = () => {
    if (sessionStorage.getItem("user-email" === null)) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  // 비밀번호 찾기
  const onResetUserPw = (data) => {
    setResetPw(data);
  };

  const saveInfo1 = (name, email, phone_number) => {
    setInfo1({
      name,
      email,
      phone_number,
    });
  };

  const saveInfo2 = (receiver, receiver_phone_number, address, message) => {
    setInfo2({
      receiver,
      receiver_phone_number,
      address,
      message,
    });
  };

  const setResultCart = (productId, count) => {
    setCart([
      ...cart,
      {
        productId,
        count,
      },
    ]);
  };

  const resultInfo = async () => {
    const infourl = "users/info";
    const inforeq = await requestGet(infourl, false);
    if (inforeq.status === 200) {
      if (sessionStorage.getItem("user-email") !== null) {
        //회원
        setResInfo({
          name: inforeq.data.name,
          email: inforeq.data.email,
          phone_number: inforeq.data.phone_number,
          receiver: info2.receiver,
          receiver_phone_number: info2.receiver_phone_number,
          address: info2.address,
          message: info2.message,
          products: cart,
        });
      } else {
        //비회원
        setResInfo({
          name: info1.name,
          email: info1.email,
          phone_number: info1.phone_number,
          receiver: info2.receiver,
          receiver_phone_number: info2.receiver_phone_number,
          address: info2.address,
          message: info2.message,
          products: cart, //비회원 장바구니를 가져오는 api가 필요할 것 같음
        });
      }
      console.log(resInfo);
    }
  };

  const onPurchase = async () => {
    const buyurl = "users/purchase";
    const buyreq = await requestPost(buyurl, resInfo);
    console.log(buyreq);

    console.log(buyreq.data.success);
    console.log(resInfo);
    return resInfo;
  };

  // 상품 수정
  const onEditProduct = (data) => {
    setEditData(data);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Main onUserState={onUserState} isLogin={isLogin} allProduct={allProduct} />}
          />
          <Route exact path="/user-login" element={<User requestPost={requestPost} onUserState={onUserState} />} />
          <Route exact path="/find-id" element={<UserFindId requestPost={requestPost} />} />
          <Route
            exact
            path="/find-pw"
            element={<UserFindPw requestPost={requestPost} onResetUserPw={onResetUserPw} />}
          />
          <Route exact path="/reset-pw" element={<UserResetPw requestPost={requestPost} resetPw={resetPw} />} />
          <Route exact path="/sign-up" element={<UserSignUp requestPost={requestPost} />} />
          <Route
            exact
            path="/editmemberinfo"
            element={<UserInfoEdit requestPost={requestPost} requestGet={requestGet} />}
          />
          <Route
            exact
            path="/:name"
            element={
              <Product
                requestPost={requestPost}
                requestGet={requestGet}
                product={product}
                setResultCart={setResultCart}
              />
            }
          />
          <Route exact path="/product" element={<Product requestGet={requestGet} />} />
          <Route exact path="/order" element={<Order />} />
          <Route
            exact
            path="/order-non-member"
            element={<OrderNonMember orderInfo={orderInfo} saveInfo1={saveInfo1} />}
          />
          <Route
            exact
            path="/order-shipping-info"
            element={
              <OrderShipping
                requestPost={requestPost}
                requestGet={requestGet}
                shippingInfo={shippingInfo}
                saveInfo2={saveInfo2}
                resultInfo={resultInfo}
              />
            }
          />
          <Route exact path="/order-pay" element={<OrderPaying requestGet={requestGet} />} />
          <Route exact path="/mypage" element={<UserMyPage requestPost={requestPost} requestGet={requestGet} />} />
          <Route
            exact
            path="/management-product"
            element={<ProductManagement onEditProduct={onEditProduct} requestGet={requestGet} />}
          />
          <Route exact path="/add-product" element={<AdminAddProduct />} />
          <Route exact path="/edit-product" element={<AdminEditProduct editData={editData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
