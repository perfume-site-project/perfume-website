import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductListItem from "./ProductListItem";
import styles from "../../assets/css/ProductManagement/ProductList.module.css";
import axios from "axios";

const ProductList = ({ onEditProduct, requestGet }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
 
  const getData = async () => {
    const res = await requestGet("allproduct");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  },[]);

  const onEdit = async (id) => {
    const url = "/product?id=" + id;
    const res = await requestGet(url);
    onEditProduct(res.data);
    navigate('/edit-product');
  };

  const onRemove = async (_id) => {
    const res = await axios.post("/product/delete", {
      _id,
    });

    if (res.data.success === true) {
      getData();
      alert("삭제가 완료되었습니다.");
    } else {
      alert("삭제에 실패하였습니다.");
    }
  };

  return (
    <section className={styles.productList}>
      <h1 className={styles.srOnly}>리스트</h1>
      <ul className={styles.ul}>
        {data.map((item) => (
          <ProductListItem
            onEdit={onEdit}
            onRemove={onRemove}
            key={item._id}
            name={item.name}
            _id={item._id}
          />
        ))}
      </ul>
      <Link to="/add-product">
        <button type="button" className={styles.button}>
          상품등록
        </button>
      </Link>
    </section>
  );
};

export default ProductList;
