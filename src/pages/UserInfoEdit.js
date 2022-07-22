import {
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import EditMemberInfo from '../Components/EditMemberInfo';

const UserInfoEdit = ({requestPost, requestGet}) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path='/' element={<EditMemberInfo requestPost={requestPost} requestGet={requestGet}/>} />
      </Routes>
    </Wrapper>
  );
}

export default UserInfoEdit