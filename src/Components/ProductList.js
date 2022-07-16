import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductListItem from './ProductListItem';
import styles from '../assets/css/ProductList.module.css';

const ProductList = () => {
  
  useEffect(() => {
    const url = '/product';
    
  });

  return (
    <section className={styles.productList}>
      <h1 className={styles.srOnly}>리스트</h1>
      <ul className={styles.ul}>
        <ProductListItem />
      </ul>
      <Link to="/product-add">
        <button type="button" className={styles.button}>상품등록</button>
      </Link>
    </section>
  );
}

export default ProductList;