import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import Header from "../Components/Header";
import AddProduct from "../Components/ProductManagement/AddProduct";

const AdminAddProduct = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path="/" element={<AddProduct />} />
      </Routes>
    </Wrapper>
  );
};

export default AdminAddProduct;
