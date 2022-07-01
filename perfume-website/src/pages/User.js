import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import UserLogin from '../Components/UserLogin';

const User = ({requestPost, login}) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<UserLogin requestPost={requestPost} login={login}/>} />
      </Routes>
    </Wrapper>
  );
}

export default User