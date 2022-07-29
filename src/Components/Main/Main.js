import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "../../assets/css/Main/Main.module.css";
import main_logo from "../../assets/images/main_logo.png";
import PerfumeList from "./PerfumeList";

import FLORAL from "../../assets/images/FLORAL.gif";

const Main = ({ onUserState, isLogin, allProduct }) => {
  const [searchWord, setSearchWord] = useState("");
  const [type, setType] = useState(FLORAL);

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      sessionStorage.removeItem("user-email");
      onUserState();
    }
  };

  return (
    <div className="Main">
      <div className={styles.head_container}>
        <PerfumeList setType={setType} allProduct={allProduct} />
        <img className={styles.main_img} src={type || FLORAL} alt="main" />
        <div className={styles.login_box}>
          {/* 관리자 로그인 */}
          {isLogin === true && sessionStorage.getItem("user-email") === "admin@naver.com" && (
            <>
              <button type="button" className={styles.text} onClick={handleLogout}>
                로그아웃
              </button>
              <p className={styles.text}>/</p>
              <Link to="/management-product" className={styles.text}>
                상품관리
              </Link>
            </>
          )}
          {/* 회원 로그인 */}
          {isLogin === true && sessionStorage.getItem("user-email") !== "admin@naver.com" && (
            <>
              <button type="button" className={styles.text} onClick={handleLogout}>
                로그아웃
              </button>
              <p className={styles.text}>/</p>
              <Link to={"/mypage"}>
                <button type="button" className={styles.text}>
                  마이페이지
                </button>
              </Link>
            </>
          )}
          {/* 비로그인 */}
          {isLogin === false && (
            <>
              <Link to={"/user-login"} className={styles.text}>
                로그인
              </Link>
              <p className={styles.text}>/</p>
              <Link to={"/sign-up"} className={styles.text}>
                회원가입
              </Link>
            </>
          )}
        </div>
        <div className="logo_box">
          <Link to={"/"}>
            <img className={styles.main_logo} src={main_logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className={styles.search_bar}>
        <input
          className={styles.search_input}
          value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default Main;
