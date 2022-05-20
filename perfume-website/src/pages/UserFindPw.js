import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import FindPw from '../components/FindPw';

const UserFindId = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<FindPw />} />
      </Routes>
    </Wrapper>
  );
}

export default UserFindId