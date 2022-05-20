import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import FindId from '../components/FindId';

const UserFindId = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<FindId />} />
      </Routes>
    </Wrapper>
  );
}

export default UserFindId