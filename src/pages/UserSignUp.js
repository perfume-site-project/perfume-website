import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import SignUp from '../Components/User/SignUp';

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