import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../assets/css/AddProduct.module.css";

const AddProduct = () => {
  const navigate = useNavigate();

  const nameInput = useRef();
  const priceInput = useRef();
  const descriptionInput = useRef();
  const ingredientInput = useRef();
  const tastingInput = useRef();
  const mainImageInput = useRef();
  const subImageInput = useRef();

  const formData = new FormData();

  const [state, setState] = useState({
    name: "",
    price: 0,
    description: "",
    ingredient_description: "",
    tasting_note: "",
  });

  const [files, setFiles] = useState({
    main_image: null,
    sub_images: null,
  });

  const handleChangeState = (e) => {
    const target = e.target;
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handleChangeFile = (e) => {
    setFiles({
      ...files,
      [e.target.name]: e.target.files,
    });
  };

  const handleLogin = () => {
    if (state.name.length < 1) {
      alert("향수 이름을 입력하세요.");
      nameInput.current.focus();
      return;
    }

    if (state.price.length < 1) {
      alert("향수 가격을 입력하세요.");
      priceInput.current.focus();
      return;
    }

    if (state.description.length < 1) {
      alert("상품정보를 입력하세요.");
      descriptionInput.current.focus();
      return;
    }

    if (state.ingredient_description.length < 1) {
      alert("향수 성분을 입력하세요.");
      ingredientInput.current.focus();
      return;
    }

    if (state.tasting_note.length < 1) {
      alert("테이스팅 노트를 입력하세요.");
      tastingInput.current.focus();
      return;
    }

    if (files.main_image === null) {
      alert("메인 상품 이미지를 첨부하세요.");
      mainImageInput.current.focus();
      return;
    }

    if (files.sub_images === null) {
      alert("상품 상세 이미지를 첨부하세요.");
      subImageInput.current.focus();
      return;
    }

    handleRequest();
  };

  const handleRequest = async () => {
    const url = "/product/upload";

    for (var i in state) {
      formData.append(i, state[i]);
    }

    Array.from(files.main_image).forEach((it) => {
      formData.append('main_image', it)
    })

    Array.from(files.sub_images).forEach((it) => {
      formData.append('sub_images', it)
    })

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    await axios({
      method: "POST",
      url,
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
    .then((res) => {
      alert("상품등록이 완료되었습니다.");
      navigate("/", { replace: true });
      console.log(res);
    })
    .catch((err) => {
      alert("상품등록에 실패하였습니다.");
      console.log(err);
    });
};

  return (
    <section className={styles.addProduct}>
      <h1 className={styles.srOnly}>상품등록</h1>
      <div className={styles.container}>
        <div>
          <label className={styles.label} htmlFor="name">
            향수 이름
          </label>
          <input
            className={styles.input}
            id="name"
            type="text"
            name="name"
            value={state.name}
            ref={nameInput}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="price">
            가격
          </label>
          <input
            className={styles.input}
            id="price"
            type="text"
            name="price"
            value={state.price}
            ref={priceInput}
            onChange={handleChangeState}
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="description">
            상품 정보
          </label>
          <textarea
            className={styles.textarea}
            name="description"
            id="description"
            value={state.description}
            ref={descriptionInput}
            onChange={handleChangeState}
          ></textarea>
        </div>
        <div>
          <label className={styles.label} htmlFor="ingredient_description">
            성분
          </label>
          <textarea
            className={styles.textarea}
            name="ingredient_description"
            id="ingredient_description"
            value={state.ingredient_description}
            ref={ingredientInput}
            onChange={handleChangeState}
          ></textarea>
        </div>
        <div>
          <label className={styles.label} htmlFor="tasting_node">
            테이스팅 노트
          </label>
          <textarea
            className={styles.textarea}
            name="tasting_note"
            id="tasting_note"
            value={state.tasting_note}
            ref={tastingInput}
            onChange={handleChangeState}
          ></textarea>
        </div>
        <div>
          <label className={styles.label} htmlFor="main_image">
            메인 상품 이미지
          </label>
          <input
            type="file"
            id="main_image"
            name="main_image"
            ref={mainImageInput}
            onChange={handleChangeFile}
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="sub_images">
            상품 상세 이미지
          </label>
          <input
            type="file"
            id="sub_images"
            name="sub_images"
            multiple="multiple"
            ref={subImageInput}
            onChange={handleChangeFile}
          />
        </div>
        <button type="button" onClick={handleLogin} className={styles.button}>
          추가하기
        </button>
      </div>
    </section>
  );
};

export default AddProduct;
