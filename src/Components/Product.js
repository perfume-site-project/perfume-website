import Header from '../Components/Header';
import Wrapper from '../Components/Wrapper';
import styles from '../assets/css/Product.module.css'
import {useEffect, useRef, useState} from "react";
import { useNavigate } from 'react-router-dom';

const Product = ({requestGet}) => {
    const navigate = useNavigate();
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

    useEffect(()=>{
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const productInfo = {
        pname: 'perfume name',
        price: 199000,
        shortInfo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quam inventore temporibus sit numquam voluptatum iure accusantium dignissimos unde, eum porro similique sunt magnam nostrum ab praesentium optio',
        img_main: '',
        ingredients: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quam inventore temporibus sit numquam voluptatum iure accusantium dignissimos unde, eum porro similique sunt magnam nostrum ab praesentium optio repellat accusamus! Omnis, cum rem delectus esse eum quo laboriosam eius dolore vel perferendis, animi, sunt quibusdam sequi sit. Numquam voluptatum qui earum esse molestias accusantium eaque eum rem aut recusandae incidunt optio facere dignissimos fuga inventore, quas assumenda. Molestiae, quidem temporibus? Molestiae modi dolore repudiandae magnam ipsum! Necessitatibus adipisci deserunt iusto quasi esse illum error doloremque natus maxime quo. Quaerat amet a quo nam! Itaque aliquid obcaecati, odit dolores provident sapiente.',
        note: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quam inventore temporibus sit numquam voluptatum iure accusantium dignissimos unde, eum porro similique sunt magnam nostrum ab praesentium optio repellat accusamus! Omnis, cum rem delectus esse eum quo laboriosam eius dolore vel perferendis, animi, sunt quibusdam sequi sit. Numquam voluptatum qui earum esse molestias accusantium eaque eum rem aut recusandae incidunt optio facere dignissimos fuga inventore, quas assumenda. Molestiae, quidem temporibus? Molestiae modi dolore repudiandae magnam ipsum! Necessitatibus adipisci deserunt iusto quasi esse illum error doloremque natus maxime quo. Quaerat amet a quo nam! Itaque aliquid obcaecati, odit dolores provident sapiente.',
        detail: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quam inventore temporibus sit numquam voluptatum iure accusantium dignissimos unde, eum porro similique sunt magnam nostrum ab praesentium optio repellat accusamus! Omnis, cum rem delectus esse eum quo laboriosam eius dolore vel perferendis, animi, sunt quibusdam sequi sit. Numquam voluptatum qui earum esse molestias accusantium eaque eum rem aut recusandae incidunt optio facere dignissimos fuga inventore, quas assumenda. Molestiae, quidem temporibus? Molestiae modi dolore repudiandae magnam ipsum! Necessitatibus adipisci deserunt iusto quasi esse illum error doloremque natus maxime quo. Quaerat amet a quo nam! Itaque aliquid obcaecati, odit dolores provident sapiente.','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quam inventore temporibus sit numquam voluptatum iure accusantium dignissimos unde, eum porro similique sunt magnam nostrum ab praesentium optio repellat accusamus! Omnis, cum rem delectus esse eum quo laboriosam eius dolore vel perferendis, animi, sunt quibusdam sequi sit. Numquam voluptatum qui earum esse molestias accusantium eaque eum rem aut recusandae incidunt optio facere dignissimos fuga inventore, quas assumenda. Molestiae, quidem temporibus? Molestiae modi dolore repudiandae magnam ipsum! Necessitatibus adipisci deserunt iusto quasi esse illum error doloremque natus maxime quo. Quaerat amet a quo nam! Itaque aliquid obcaecati, odit dolores provident sapiente.'],
        review:[
            {
                rate: 4.8,
                nickname: 'nickname',
                date: '2022/06/03',
                title: "title",
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quam inventore temporibus sit numquam voluptatum iure accusantium dignissimos unde, eum porro similique sunt magnam nostrum ab praesentium optio'
            },
            {
                rate: 4.2,
                nickname: 'nickname',
                date: '2022/06/01',
                title: "title",
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quam inventore temporibus sit numquam voluptatum iure accusantium dignissimos unde, eum porro similique sunt magnam nostrum ab praesentium optio'
            }
        ]
    }

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
                        <img src={productInfo["img_main"]} alt="상품이미지"/>
                    </div>
                    <div className={styles.introText}>
                        <h1>{productInfo["pname"]}</h1>
                        <p>{productInfo['price'].toLocaleString('ko-KR')}원</p>
                        <p>{productInfo["shortInfo"]}</p>
                        <button>장바구니 담기</button>
                        <button onClick={checkLogin}>구매하기</button>
                    </div>
                </div>
                <div className={styles.ingredients} ref={div1}>
                    <h2>ingredients</h2>
                    <p>{productInfo["ingredients"]}</p>
                </div>
                <div className={styles.notes} ref={div2}>
                    <h2>notes</h2>
                    <p>{productInfo["note"]}</p>
                </div>
                <div className={styles.detail} ref={div3}>
                    <h2>detail</h2>
                    {productInfo["detail"].map((data)=>{
                        return <p>{data}</p>
                    })}

                </div>
                <div className={styles.review} ref={div4}>
                    <h2>review</h2>
                    {productInfo["review"].map((data)=>{
                        return(
                            <div className={styles.review_item}>
                                <p className={styles.rate}>{data['rate']}/5.0</p>
                                <div className={styles.review_head}>
                                    <h3>{data['title']}</h3>
                                    <p>{data['nickname']}   {data['date']}</p>
                                </div>
                                <p>{data['content']}</p>
                            </div>

                        )
                    })}
                </div>
            </section>
        </Wrapper>
    )
}

export default Product;
