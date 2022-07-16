import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductListItem from './ProductListItem';
import styles from '../assets/css/ProductList.module.css';
import axios from 'axios';

const ProductList = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);

  const getData = async () => {
    const res = await axios.get('').then((res) => console.log(res)).catch((err) => new Error(err))
    // setData();
  }

  useEffect(() => {
    // getData();
    
  });

  // 상품 수정 함수 구현
  const onEdit = (id) => {
    // id에 해당하는 data를 editData()에 할당
    // onEditProduct(editDate);
  }
  
  const onRemove = (id) => {
    const url = '/product/delete';
    // POST
  }
  
  return (
    <section className={styles.productList}>
      <h1 className={styles.srOnly}>리스트</h1>
      <ul className={styles.ul}>
        {data.map((item) => (
          <ProductListItem onEdit={onEdit} onRemove={onRemove} />
        ))}
      </ul>
      <Link to="/product-add">
        <button type="button" className={styles.button}>상품등록</button>
      </Link>
    </section>
  );
}

export default ProductList;