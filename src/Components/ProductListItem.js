import styles from '../assets/css/ProductListItem.module.css';

const ProductListItem = ({ onRemove, onEdit }) => {
  const handleRemove = () => {
    if(window.confirm('해당 상품을 삭제하시겠습니까?')) {
      // onRemove(id)
    }
  }

  const handleEdit = () => {
    // onEdit(id)
  }

  return (
    <li className={styles.listItem}>
      <strong className={styles.productName}>상품이름</strong>
      <div className={styles.boxContainer}>
        <button type="button" className={styles.button} onClick={handleRemove}>상품삭제</button>
        <button type="button" className={styles.button} onClick={handleEdit}>상품수정</button>
      </div>
    </li>
  );
};

export default ProductListItem;
