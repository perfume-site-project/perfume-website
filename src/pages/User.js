import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import UserLogin from '../Components/UserLogin';

const User = ({ requestPost, onUserState }) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<UserLogin requestPost={requestPost} onUserState={onUserState} />} />
      </Routes>
    </Wrapper>
  );
}

export default User