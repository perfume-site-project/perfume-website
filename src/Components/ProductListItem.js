import styles from '../assets/css/ProductListItem.module.css';

const ProductListItem = () => {
  return (
    <li className={styles.listItem}>
      <strong className={styles.productName}>상품이름</strong>
      <div className={styles.boxContainer}>
        <button type="button" className={styles.button}>상품삭제</button>
        <button type="button" className={styles.button}>상품수정</button>
      </div>
    </li>
  );
};

export default ProductListItem;
