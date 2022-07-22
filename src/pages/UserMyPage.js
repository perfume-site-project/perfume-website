import {Routes,Route} from 'react-router-dom';
import Wrapper from '../Components/Layout/Wrapper';
import Header from '../Components/Layout/Header';
import MyPage from '../Components/MyPage/MyPage';

const UserMyPage = ({requestGet}) => {

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<MyPage requestGet={requestGet}/>} />
      </Routes>
    </Wrapper>
  );
}

export default UserMyPage