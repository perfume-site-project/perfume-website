import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Layout/Wrapper';
import Header from '../Components/Layout/Header';
import FindId from '../Components/User/FindId';

const UserFindId = ({ requestPost }) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<FindId requestPost={requestPost}/>} />
      </Routes>
    </Wrapper>
  );
}

export default UserFindId