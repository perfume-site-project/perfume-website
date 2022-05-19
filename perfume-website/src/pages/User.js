import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Login from '../components/Login';
import FindId from '../components/FindId';
import FindPw from '../components/FindPw';

const User = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/find-id" element={<FindId />} />
          <Route exact path="/find-pw" element={<FindPw />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default User