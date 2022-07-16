import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Wrapper from "../Components/Wrapper";
import Header from "../Components/Header";
import EditProduct from "../Components/EditProduct";

const AdminEditProduct = ({ editData }) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path="/" element={<EditProduct editData={editData} />} />
      </Routes>
    </Wrapper>
  );
};

export default AdminEditProduct;
