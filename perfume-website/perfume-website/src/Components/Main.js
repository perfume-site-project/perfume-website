import {Link} from "react-router-dom";
import { useState } from "react";

import styles from '../assets/css/Main.module.css'
import main_logo from "../assets/images/main_logo.png";
import main_img from "../assets/images/main.gif";
import PerfumeList from "./PerfumeList";

const Main = () => {
    const [searchWord, setSearchWord] = useState("");

    return(
        <div className="Main">
                <div className={styles.head_container}>
                    <PerfumeList/>
                    <img className={styles.main_img} src={main_img} alt="main" />
                    <div className={styles.login_box}>
                        <Link to={"/login"} className={styles.text}>로그인</Link>
                        <p className={styles.text}>/</p>
                        <Link to={"/join"} className={styles.text}>회원가입</Link>
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