import Header from '../Layout/Header';
import Wrapper from '../Layout/Wrapper';
import styles from '../../assets/css/Product/Product.module.css'
import {useEffect, useRef, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import WriteReview from "./WriteReview.js";

const Product = ({requestGet, requestPost, product, setResultCart}) => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false)
    const [cart, setCart] = useState([]);
    const [addCart, setAddCart] = useState(false);
    
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

    useEffect(()=>{
        fetchProduct();
    }, [showModal]);

    const handleCount = (e) => {
        const target = e.target;
        setCart(
            {
                productId: product['_id'],
                count: target.value,
            }
        );
        //console.log(cart);
    }

    const handleCart = () => {
        if(sessionStorage.getItem("user-email") !== null){ //회원 장바구니
            if(!addCart){
                alert("장바구니에 추가되었습니다.");
                setResultCart(cart.productId, cart.count);
                setAddCart(true);
            }else{
                alert("이미 장바구니에 추가된 상품입니다.");
            }
        }else{ //비회원 장바구니
            if(!addCart){
                alert("장바구니에 추가되었습니다.");
                const url = 'users/cartview';
                const req = requestPost(url, cart);
                setAddCart(true);
            }else{
                alert("이미 장바구니에 추가된 상품입니다.");
            }
        }
    }

    const buyProduct = async () => {
        if(sessionStorage.getItem("user-email") !== null){ //회원 주문
            if(!addCart){
                setResultCart(cart.productId, cart.count);
                setAddCart(true);
            }
            navigate('/order-shipping-info', {replace: true});
            const url = 'users/info';
            const req = await requestGet(url);
        } else {
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
                        <p>{product['price'].toLocaleString('ko-KR')}$</p>
                        <p>{product['description']}</p>
                        <input className={styles.count} type={'number'} min={0} onChange={handleCount}></input>
                        <button onClick={handleCart}>장바구니 담기</button>
                        <button onClick={buyProduct}>구매하기</button>
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
                    {product['image_link']['sub_images'].map((data, idx)=>{
                        return <img src={data} onLoad={() => handleResize()} key={idx}/>
                    })}
                    <div className={styles.line}/>
                </div>

                <div className={styles.review} ref={div4}>
                    <button className={styles.review_button} onClick={handleReviewButton}>리뷰 참여하기</button>
                    {product['review'].map((data, idx)=>{
                        const date = new Date(data['date']).toLocaleDateString();
                        return(
                            <div className={styles.review_item} key={idx}>
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