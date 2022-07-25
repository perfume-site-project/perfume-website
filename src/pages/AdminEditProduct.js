import { Routes, Route } from "react-router-dom";
import Wrapper from "../Components/Layout/Wrapper";
import Header from "../Components/Layout/Header";
import EditProduct from "../Components/ProductManagement/EditProduct";

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
