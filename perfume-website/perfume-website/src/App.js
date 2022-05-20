import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "./Components/Login";
import Main from "./Components/Main";
import Join from "./Components/Join";
import Product from "./Components/Product";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/join" element={<Join/>}/>
              <Route path="/product" element={<Product/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
