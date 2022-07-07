import { useState } from 'react';

const AddProduct = () => {
  const handleChangeState = (e) => {
    const [state, setState] = useState({
      perfumeName: '',
      perfumePrice: '',
      perfumeDescription: '',
      perfumeIngredient: '',
      perfumeNote: '',
      perfumeDetail: '',
    });

    const target = e.target;
    setState(
      {
        ...state,
        [target.name]: target.value,
      }
    );
  }

  const handleLogin = () => {
    console.log(state)
  }

  return (
    <section className={styles.addProduct}>
      <h1 className={styles.srOnly}>상품등록</h1>
      <div className={styles.inputContainer}>
        <label 
          className={styles.label}
          htmlFor="perfumeName"
        >
          향수이름
        </label>
        <input 
          className={styles.input}
          id="perfumeName"
          type="text"
          name="perfumeName"
          value={state.perfumeName}
          onChange={handleChangeState}
        />
      </div>
      <div className={styles.inputContainer}>
        <label 
          className={styles.label}
          htmlFor="perfumePrice"
        >
          가격
        </label>
        <input
          className={styles.input}
          id="perfumePrice"
          type="text"
          name="perfumePrice"
          value={state.perfumePrice}
          onChange={handleChangeState}
        />
      </div>
      <div className={styles.inputContainer}>
        <label 
          className={styles.label}
          htmlFor="perfumeDescription"
        >
          가격
        </label>
        <input
          className={styles.input}
          id="perfumeDescription"
          type="text"
          name="perfumeDescription"
          value={state.perfumeDescription}
          onChange={handleChangeState}
        />
      </div>
      <div className={styles.inputContainer}>
        <label 
          className={styles.label}
          htmlFor="perfumeIngredient"
        >
          가격
        </label>
        <input
          className={styles.input}
          id="perfumeIngredient"
          type="text"
          name="perfumeIngredient"
          value={state.perfumeIngredient}
          onChange={handleChangeState}
        />
      </div>
      <div className={styles.inputContainer}>
        <label 
          className={styles.label}
          htmlFor="perfumeNote"
        >
          가격
        </label>
        <input
          className={styles.input}
          id="perfumeNote"
          type="text"
          name="perfumeNote"
          value={state.perfumeNote}
          onChange={handleChangeState}
        />
      </div>
      <div className={styles.inputContainer}>
        <label 
          className={styles.label}
          htmlFor="perfumeDetail"
        >
          가격
        </label>
        <textarea>
          className={styles.input}
          id="perfumeDetail"
          type="text"
          name="perfumeDetail"
          value={state.perfumeDetail}
          onChange={handleChangeState}
        </textarea>
      </div>
      <button 
        type="button"
        onClick={handleLogin}
        className={styles.button}
      >
        추가하기
      </button>
    </section>
  );
}

export default AddProduct;