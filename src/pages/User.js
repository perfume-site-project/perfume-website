import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import UserLogin from '../Components/UserLogin';

const User = ({ requestPost, onUserState }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(sessionStorage.getItem('user-email') !== null) {
      alert('이미 로그인 상태입니다.');
      navigate('/', {replace: true})
    } 
  })

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