import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import FindId from '../Components/FindId';

const UserFindId = ({ requestPost, findId, userData }) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<FindId requestPost={requestPost} findId={findId} userData={userData} />} />
      </Routes>
    </Wrapper>
  );
}

export default UserFindId