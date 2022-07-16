import styles from '../assets/css/PerfumeList.module.css'
import dummy from "../db/perfume.json";
import ListElement from "./ListElement";
import {Link} from "react-router-dom";

const PerfumeList = (props) => {
    //console.log(dummy);
    const getType = (text) => {
        props.getType2(text);
    }
    
    return ( <div>
        <div className={`${styles.list_div}`}>
            {dummy.perfumes.map((perfumes, idx) => (
                <Link to={"/"+perfumes.type.toLowerCase()} className={styles.text}>
                    <ListElement getType={getType} id={perfumes.id} type={perfumes.type} loc={idx} key={idx}/>
                </Link>
            ))}
        </div>
    </div> )
}
export default PerfumeList;