import { Routes, Route } from "react-router-dom";
import Wrapper from "../Components/Layout/Wrapper";
import Header from "../Components/Layout/Header";
import MyPage from "../Components/MyPage/MyPage";

const UserMyPage = ({ requestPost, requestGet }) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path="/" element={<MyPage requestPost={requestPost} requestGet={requestGet} />} />
      </Routes>
    </Wrapper>
  );
};

export default UserMyPage;
