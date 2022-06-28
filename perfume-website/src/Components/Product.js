import Header from '../Components/Header';
import Wrapper from '../Components/Wrapper';
import styles from '../assets/css/Product.module.css'
const Product = (props) => {
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

    return(
        <Wrapper>
            <Header/>
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
                        <button>구매하기</button>
                    </div>
                </div>
                <div className={styles.ingredients}>
                    <h2>ingredients</h2>
                    <p>{productInfo["ingredients"]}</p>
                </div>
                <div className={styles.notes}>
                    <h2>notes</h2>
                    <p>{productInfo["note"]}</p>
                </div>
                <div className={styles.detail}>
                    <h2>detail</h2>
                    {productInfo["detail"].map((data)=>{
                        return <p>{data}</p>
                    })}

                </div>
                <div className={styles.review}>
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
