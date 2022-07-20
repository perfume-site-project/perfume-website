import styles from "../assets/css/WriteReview.module.css";
import React, {useState} from "react";
import filled_star from "../assets/images/filled_star.png";
import empty_star from '../assets/images/empty_star.png';

const WriteReview = ({requestPost, id, setShowModal}) => {
    const current = new Date();
    const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
    const [state, setState] = useState({
        score: 0,
        title: "",
        content: "",
        _id: id
    });
    
    const handleChangeState = (e) => {
        const target = e.target;
        setState(
            {
                ...state,
                [target.name]: target.value,
            }
        );
    }
    const handleSave = async () => {
        if(state.title === ""){
            alert('제목을 작성해주세요')
        }else if(state.score === 0){
            alert('별점을 매겨주세요')
        }else if(state.content === ""){
            alert('내용을 작성해주세요')
        }else{
            console.log(state);
            const url = '/product/review';
            const res = await requestPost(url, state);
            if(res.data.success === true){
                alert('저장되었습니다')
                handleCancel();
            }
        }
    }

    const handleCancel = () => {
        setState({
            ...state,
            score: 0,
            title: "",
            content: "",
        });
        setShowModal(false)
    }
    return(
        <div className={styles.modal_wrap}>
            <div className={styles.modal}>
                <div className={styles.review}>
                    <h2>리뷰 작성하기</h2>
                    <div>
                        <input
                            className={styles.title}
                            type="text" id="title"
                            name="title" value={state.title}
                            placeholder='제목'
                            onChange={handleChangeState}
                        />
                    </div>
                    <div className={styles.score}>
                        <img src={state.score>=1 ? filled_star:empty_star} alt=""
                             onClick={()=>{setState({...state,score:1})}}/>
                        <img src={state.score>=2 ? filled_star:empty_star} alt=""
                             onClick={()=>{setState({...state,score:2})}}/>
                        <img src={state.score>=3 ? filled_star:empty_star} alt=""
                             onClick={()=>{setState({...state,score:3})}}/>
                        <img src={state.score>=4 ? filled_star:empty_star} alt=""
                             onClick={()=>{setState({...state,score:4})}}/>
                        <img src={state.score>=5 ? filled_star:empty_star} alt=""
                             onClick={()=>{setState({...state,score:5})}}/>
                    </div>
                    <div className={styles.date_box}>
                        <div className={styles.date}>{date}</div>
                    </div>

                    <textarea
                        className={styles.content}
                        id="content"
                        name="content" value={state.content}
                        placeholder='사용 후기를 남겨주세요'
                        onChange={handleChangeState}
                    />
                    <div className={styles.review_button}>
                        <button onClick={handleSave}>저장하기</button>
                        <button onClick={handleCancel}>취소하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WriteReview;