import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import Join from "./components/Join";
import Product from "./components/Product";
import Order from './pages/Order';
import User from './pages/User';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/order" element={<Order />}/>
              <Route path="/join" element={<Join/>}/>
              <Route path="/product" element={<Product/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
