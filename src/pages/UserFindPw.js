import { Routes, Route } from "react-router-dom";
import Wrapper from "../Components/Layout/Wrapper";
import Header from "../Components/Layout/Header";
import FindPw from "../Components/User/FindPw";

const UserFindPw = ({ requestPost, onResetUserPw }) => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route exact path="/" element={<FindPw requestPost={requestPost} onResetUserPw={onResetUserPw} />} />
      </Routes>
    </Wrapper>
  );
};

export default UserFindPw;
