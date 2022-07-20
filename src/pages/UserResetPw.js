import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Layout/Wrapper';
import Header from '../Components/Layout/Header';
import ResetPw from '../Components/User/ResetPw';

const UserResetPw = ({ requestPost, resetPw }) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<ResetPw requestPost={requestPost} resetPw={resetPw} />} />
      </Routes>
    </Wrapper>
  );
}

export default UserResetPw;