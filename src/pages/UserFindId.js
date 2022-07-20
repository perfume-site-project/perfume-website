import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
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