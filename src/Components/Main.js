import { Link } from "react-router-dom";
import { useState } from "react";

import styles from '../assets/css/Main.module.css'
import main_logo from "../assets/images/main_logo.png";
import PerfumeList from "./PerfumeList";

import WOODY from "../assets/images/WOODY.gif";
import FRUITY from "../assets/images/FRUITY.gif";
import FLORAL from "../assets/images/FLORAL.gif";
import CITRUS from "../assets/images/CITRUS.gif";
import GREEN from "../assets/images/GREEN.gif";

const Main = ({ onUserState, isLogin, allProduct }) => {
    const [searchWord, setSearchWord] = useState("");
    const [type, setType] = useState(FLORAL);

    const getType2 = (text) => {
        switch (text) {
            case 'WOODY' :
                setType(WOODY)
                break;
            case 'FRUITY' : 
                setType(FRUITY)
                break;
            case 'CITRUS' : 
                setType(CITRUS)
                break;
            case 'GREEN' : 
                setType(GREEN)
                break;
            default : 
                setType(FLORAL)
        }
    }
    
    const handleLogout = () => {
        if(window.confirm('로그아웃 하시겠습니까?')) {
            sessionStorage.removeItem('user-email');
            onUserState();
        }
    }

    return(
        <div className="Main">
                <div className={styles.head_container}>
                    <PerfumeList getType2={getType2} allProduct={allProduct}/>
                    <img className={styles.main_img} src={type} alt="main"/>
                    <div className={styles.login_box}>
                        {/* 관리자 로그인 */}
                        {isLogin === true && 
                        sessionStorage.getItem('user-email') === 'admin@naver.com' && (
                            <> 
                                <button type="button" className={styles.text} onClick={handleLogout}>로그아웃</button>
                                <p className={styles.text}>/</p>
                                <Link to="/management-product" className={styles.text}>상품관리</Link>
                            </>
                        )}
                        {/* 회원 로그인 */}
                        {isLogin === true && 
                        sessionStorage.getItem('user-email') !== 'admin@naver.com' && (
                            <> 
                                <button type="button" className={styles.text} onClick={handleLogout}>로그아웃</button>
                                <p className={styles.text}>/</p>
                                <button type="button" className={styles.text} onClick={handleLogout}>마이페이지</button>
                            </>
                        )}
                        {/* 비로그인 */}
                        {isLogin === false && (
                            <>
                                <Link to={"/user-login"} className={styles.text}>로그인</Link>
                                <p className={styles.text}>/</p>
                                <Link to={"/sign-up"} className={styles.text}>회원가입</Link>
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
                    <input className={styles.search_input} value={searchWord}
                        onChange={(e)=>{setSearchWord(e.target.value);}}/>
                </div>
        </div>
    );
}
export default Main;