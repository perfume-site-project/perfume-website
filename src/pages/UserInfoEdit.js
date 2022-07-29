import { Routes, Route } from "react-router-dom";
import Wrapper from "../Components/Layout/Wrapper";
import Header from "../Components/Layout/Header";
import EditMemberInfo from "../Components/MyPage/EditMemberInfo";

const UserInfoEdit = ({ requestPost, requestGet }) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path="/" element={<EditMemberInfo requestPost={requestPost} requestGet={requestGet} />} />
      </Routes>
    </Wrapper>
  );
};

export default UserInfoEdit;
