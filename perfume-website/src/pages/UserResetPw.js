import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import ResetPw from '../Components/ResetPw';

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