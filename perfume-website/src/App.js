import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import Join from "./components/Join";
import Product from "./components/Product";
import User from './pages/User';
import UserFindId from './pages/UserFindId';
import UserFindPw from './pages/UserFindPw';
import UserSignUp from './pages/UserSignUp';


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
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
