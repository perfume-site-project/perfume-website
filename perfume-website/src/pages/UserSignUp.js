import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import SignUp from '../components/SignUp';

const User = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<SignUp />} />
      </Routes>
    </Wrapper>
  );
}

export default User