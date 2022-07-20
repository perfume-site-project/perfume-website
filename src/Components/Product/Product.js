import Header from '../Header';
import Wrapper from '../Wrapper';
import styles from '../assets/css/Product.module.css'
import {useEffect, useRef, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import WriteReview from "./WriteReview.js";

const Product = ({requestGet, requestPost, product}) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false)
    
    const div1 = useRef(null);
    const div2 = useRef(null);
    const div3 = useRef(null);
    const div4 = useRef(null);

    let div_height_arr = [0, 0, 0, 0];
    const [heightArr, setHeightArr] = useState(div_height_arr);

    const handleResize = () =>{
        div_height_arr = [div1?.current.clientHeight,
            div2?.current.clientHeight,
            div3?.current.clientHeight,
            div4?.current.clientHeight];
        setHeightArr(div_height_arr);
    }

    const {name} = useParams();
    const fetchProduct = () => { 
        const url = '/product?name='+name;
        requestGet(url, false);
    }

    const handleReviewButton =() => {
        if(sessionStorage.getItem('user-email') == null){
            alert('로그인 후 작성할 수 있습니다.');
        }else{
            setShowModal(true)
        }
    }

    useEffect(()=>{
        fetchProduct();
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const checkLogin = async () => {
        if(sessionStorage.getItem("user-email") !== null){
            navigate('/order-shipping-info', {replace: true});
            const url = 'users/info';
            const req = await requestGet(url);
            console.log(req);
        }else{
            navigate('/order', {replace: true});
        }
    }
    
    return(
        <Wrapper>
            <Header category={['성분', '테이스팅 노트', '상세정보', '리뷰']} heights={heightArr}/>
            <section className={styles.productInfo}>
                <div className={styles.intro}>
                    <div className={styles.imgBox}>
                        <img src={product['image_link']['main_image']} alt="상품이미지"/>
                    </div>
                    <div className={styles.introText}>
                        <h1>{product['name']}</h1>
                        <p>{product['price'].toLocaleString('ko-KR')}원</p>
                        <p>{product['description']}</p>
                        <button>장바구니 담기</button>
                        <button onClick={checkLogin}>구매하기</button>
                    </div>
                </div>
                <div className={styles.ingredients} ref={div1}>
                    <h2>ingredients</h2>
                    <p>{product['ingredient_description']}</p>
                </div>
                <div className={styles.notes} ref={div2}>
                    <h2>notes</h2>
                    <p>{product['tasting_note']}</p>
                </div>
                <div className={styles.detail} ref={div3}>
                    <h2>detail</h2>
                    {product['image_link']['sub_images'].map((data)=>{
                        return <img src={data} onLoad={() => handleResize()}/>
                    })}
                    <div className={styles.line}/>
                </div>

                <div className={styles.review} ref={div4}>
                    <button className={styles.review_button} onClick={handleReviewButton}>리뷰 참여하기</button>
                    {product['review'].map((data)=>{
                        const date = new Date(data['date']).toLocaleDateString();
                        return(
                            <div className={styles.review_item}>
                                <p className={styles.rate}>{data['score'].toFixed(1)}/5.0</p>
                                <div className={styles.review_head}>
                                    <h3>{data['title']}</h3>
                                    <p>{data['id']}   {date}</p>
                                </div>
                                <p>{data['content']}</p>
                            </div>
                        )
                    })}
                    <div>
                        {showModal && <WriteReview
                            requestPost={requestPost}
                            id={product['_id']}
                            setShowModal={setShowModal}
                        />}
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
export default Product;