import styles from "../../assets/css/ProductManagement/ProductListItem.module.css";

const ProductListItem = ({ onRemove, onEdit, name, _id }) => {
  const handleRemove = () => {
    if (window.confirm("해당 상품을 삭제하시겠습니까?")) {
      onRemove(_id);
    }
  };

  const handleEdit = () => {
    onEdit(_id);
  };

  return (
    <li className={styles.listItem}>
      <strong className={styles.productName}>{name}</strong>
      <div className={styles.boxContainer}>
        <button type="button" className={styles.button} onClick={handleRemove}>
          상품삭제
        </button>
        <button type="button" className={styles.button} onClick={handleEdit}>
          상품수정
        </button>
      </div>
    </li>
  );
};

export default ProductListItem;
