import {Routes,Route} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
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