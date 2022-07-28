import React, { useState, } from 'react';
import { useNavigate, Link } from "react-router-dom";
import styles from '../../assets/css/Mypage/MyPage.module.css'

const MyPage = ({requestPost, requestGet}) => {
    const navigate = useNavigate();
    
    const [state, setState] = useState({
        name: '',
        email: '',
        birthday: '',
        address: '',
        phone_number: '',
    });

    const userInfo = async () => {
        const infoUrl = 'users/info';
        const infoReq = await requestGet(infoUrl);
        setState({
            ...state,
            name: infoReq.data.name,
            email: infoReq.data.email,
            birthday: infoReq.data.birthday.substr(0,10),
            address: infoReq.data.address,
            phone_number: infoReq.data.phone_number,
        });
    }

    userInfo();

    const handleDelete = async () => {
        if(window.confirm("회원 탈퇴를 진행하시겠습니까?")){
            const delUrl = 'users/delete';
            const delReq = await requestPost(delUrl);
            if(delReq.data.success){
                sessionStorage.removeItem('user-email');
                alert("회원 탈퇴가 완료되었습니다.");
                navigate('/', {replace: true});
            }else{
                alert("오류가 발생하였습니다. 다시 시도해주세요.");
            }
        }else{
            alert("취소되었습니다.");
        }
    }

    return(
        <section className={styles.myPage}>
            <div className={styles.container}>
                <h1>내 정보</h1>
                <table className={styles.infoTable}>
                    <tbody>
                        <tr>
                            <td className={styles.background1}>이름</td>
                            <td className={styles.background2}>{state.name}</td>
                        </tr>
                        <tr>
                            <td className={styles.background1}>아이디(이메일)</td>
                            <td className={styles.background2}>{state.email}</td>
                        </tr>
                        <tr>
                            <td className={styles.background1}>주소</td>
                            <td className={styles.background2}>{state.address}</td>
                        </tr>
                        <tr>
                            <td className={styles.background1}>생년월일</td>
                            <td className={styles.background2}>{state.birthday}</td>
                        </tr>
                        <tr>
                            <td className={styles.background1}>연락처</td>
                            <td className={styles.background2}>{state.phone_number}</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <Link to={"/editmemberinfo"}>
                    <button className={styles.button}>회원 정보 수정</button>
                </Link>
                <button className={styles.button} onClick={handleDelete}>회원 탈퇴</button>
                <br></br>
                <br></br>
                <br></br>
                <h2>· · · · · ·</h2>
                <br></br>
                <br></br>
                <h1>장바구니</h1>
                <table className={styles.table}>
                    <tr>
                        <td rowSpan={2}><img className={styles.image} src={require('../../assets/images/logo.png')}></img></td>
                        <td><h2>상품명1</h2></td>
                        <td className={styles.font} rowSpan={2}><span>18,000원</span></td>
                    </tr>
                    <tr>
                        <td className={styles.font}><span>300ml / 1개</span></td>
                    </tr>
                    <tr className={styles.space}></tr>
                    <tr>
                        <td className={styles.image} rowSpan={2}></td>
                        <td><h2>상품명2</h2></td>
                        <td className={styles.font} rowSpan={2}>18,000원</td>
                    </tr>
                    <tr>
                        <td className={styles.font}>300ml / 1개</td>
                    </tr>
                    <tr className={styles.space}></tr>
                    <tr className={styles.space}></tr>
                    <tr className={styles.font}>
                        <td colSpan={2}>주문 금액</td>
                        <td>36,000원</td>
                    </tr>
                    <tr className={styles.font}>
                        <td colSpan={2}>배송비</td>
                        <td>+ 3,000원</td>
                    </tr>
                    <tr className={styles.font}>
                        <td colSpan={2}>할인 금액</td>
                        <td>- 0원</td>
                    </tr>
                    <tr className={styles.space}></tr>
                    <tr className={styles.font}>
                        <td colSpan={2}>총 금액</td>
                        <td>39,000원</td>
                    </tr>
                </table>
            </div>
        </section>
    );
}

export default MyPage;