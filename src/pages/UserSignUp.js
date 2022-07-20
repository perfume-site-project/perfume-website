import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Layout/Wrapper';
import Header from '../Components/Layout/Header';
import SignUp from '../Components/User/SignUp';

const UserSignUp = ({requestPost}) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<SignUp requestPost={requestPost} />} />
      </Routes>
    </Wrapper>
  );
}

export default UserSignUp