import React, { useState, } from 'react';
import styles from '../../assets/css/Mypage/MyPage.module.css'

const MyPage = ({requestGet}) => {
    
    const [state, setState] = useState({
        name: '',
        email: '',
        birthday: '',
        address: '',
        phone_number: '',
    });

    const userInfo = async () => {
        const url = 'users/info';
        const req = await requestGet(url);
        setState({
            ...state,
            name: req.data.name,
            email: req.data.email,
            birthday: req.data.birthday,
            address: req.data.address,
            phone_number: req.data.phone_number,
        });
    }

    userInfo();

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
                <button className={styles.button}>회원 정보 수정</button>
                <button className={styles.button}>회원 탈퇴</button>
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