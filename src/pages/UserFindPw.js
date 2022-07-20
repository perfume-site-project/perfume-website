import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import FindPw from '../Components/User/FindPw';

const UserFindPw = ({ requestPost, findPw }) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<FindPw requestPost={requestPost} findPw={findPw} />} />
      </Routes>
    </Wrapper>
  );
}

export default UserFindPw