import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import ProductManagementList from '../Components/ProductList';

const ProductManagement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(sessionStorage.getItem('user-email') !== 'admin@naver.com') {
      alert('관리자 계정이 아닙니다.');
      navigate('/', {replace: true})
    }
  })

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<ProductManagementList />} />
      </Routes>
    </Wrapper>
  );
}

export default ProductManagement

