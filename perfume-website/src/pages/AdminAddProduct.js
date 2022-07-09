import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import AddProduct from '../Components/AddProduct';

const AdminAddProduct = ({ onCreate }) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<AddProduct onCreate={onCreate} />} />
      </Routes>
    </Wrapper>
  );
}

export default AdminAddProduct