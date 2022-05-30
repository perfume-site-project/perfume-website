import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import FindPw from '../Components/FindPw';

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