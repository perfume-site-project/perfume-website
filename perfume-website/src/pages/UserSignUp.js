import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import SignUp from '../Components/SignUp';

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