import { useState } from 'react';
import styles from '../assets/css/AddProduct.module.css';

const AddProduct = ({ onCreate }) => {
  const [state, setState] = useState({
    name: '',
    price: 0,
    description: '',
    ingredient_description: '',
    tasting_node: '',
  });
  const [imgFile, setImgFile] = useState(null);

  const handleChangeState = (e) => {
    const target = e.target;
    setState(
      {
        ...state,
        [target.name]: target.value,
      }
    );
  }

  const handleChangeFile = (e) => {
    const file = e.target.files;
  }

  const handleLogin = () => {
    const url = '/product/upload';
    onCreate(url, state);
  }

  return (
    <section className={styles.addProduct}>
      <h1 className={styles.srOnly}>상품등록</h1>
      <div className={styles.container}>
        <div>
          <label 
            className={styles.label}
            htmlFor="name"
          >
            향수이름
          </label>
          <input 
            className={styles.input}
            id="name"
            type="text"
            name="name"
            value={state.name}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <label 
            className={styles.label}
            htmlFor="price"
          >
            가격
          </label>
          <input
            className={styles.input}
            id="price"
            type="text"
            name="price"
            value={state.price}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <label 
            className={styles.label}
            htmlFor="description"
          >
            상품정보
          </label>
          <textarea 
            className={styles.textarea}
            name="description" 
            id="description" 
            value={state.description} 
            onChange={handleChangeState}
          >
          </textarea>
        </div>
        <div>
          <label 
            className={styles.label}
            htmlFor="ingredient_description"
          >
            성분
          </label>
          <textarea
            className={styles.textarea}
            name="ingredient_description" 
            id="ingredient_description" 
            value={state.ingredient_description} 
            onChange={handleChangeState}
          >
          </textarea>
        </div>
        <div>
          <label 
            className={styles.label}
            htmlFor="tasting_node"
          >
            테이스팅 노트
          </label>
          <textarea 
            className={styles.textarea}
            name="tasting_node" 
            id="tasting_node" 
            value={state.tasting_node} 
            onChange={handleChangeState}
          >
          </textarea>
        </div>
        <div>
          <label 
            className={styles.label}
            htmlFor="main_image"
          >
            메인 상품 이미지
          </label>
          <input 
            type="file" 
            id="main_image"
            name="main_image" 
            multiple="multiple"
            onChange={handleChangeFile} 
          />
        </div>
        <div>
          <label 
            className={styles.label}
            htmlFor="sub_images"
          >
            상품 상세 이미지
          </label>
          <input 
            type="file" 
            id="sub_images"
            name="sub_images"
            multiple="multiple"
            onChange={handleChangeFile} 
          />
        </div>
        <button 
        type="button"
        onClick={handleLogin}
        className={styles.button}
      >
        추가하기
      </button>
      </div>
    </section>
  );
}

export default AddProduct;