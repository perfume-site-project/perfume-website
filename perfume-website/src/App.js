import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Components/Main";
import Product from "./Components/Product";
import User from './pages/User';
import UserFindId from './pages/UserFindId';
import UserFindPw from './pages/UserFindPw';
import UserSignUp from './pages/UserSignUp';
import Order from './pages/Order';
import OrderNonMember from './pages/OrderNonMember';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
              <Route exact path="/" element={<Main />}/>
              <Route exact path="/user-login" element={<User />}/>
              <Route exact path="/find-id" element={<UserFindId />}/>
              <Route exact path="/find-pw" element={<UserFindPw />}/>
              <Route exact path="/product" element={<Product />}/>
              <Route exact path="/sign-up" element={<UserSignUp />}/>
              <Route exact path="/order" element={<Order />}/>
              <Route exact path="/order-non-member" element={<OrderNonMember />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
