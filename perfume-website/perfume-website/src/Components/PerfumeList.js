import styles from '../assets/css/PerfumeList.module.css'
import dummy from "../db/perfume.json";
import ListElement from "./ListElement";
import {Link} from "react-router-dom";

export default function PerfumeList() {
    //console.log(dummy);
    return <div>
        <div className={`${styles.list_div}`}>
            {dummy.perfumes.map((perfumes, idx) => (
                <Link to={"/product"} className={styles.text}>
                    <ListElement id={perfumes.id} type={perfumes.type} loc={idx} key={idx}/>
                </Link>
            ))}
        </div>
    </div>
}