import styles from '../assets/css/PerfumeList.module.css'
import dummy from "../db/perfume.json";

export default function PerfumeList() {
    //console.log(dummy);
    return <div>
        <div className={`${styles.list_div}`}>
            {dummy.perfumes.map(perfumes => (
                <div className={`${styles.perfume_list}`} key={perfumes.id}> #{perfumes.id} {perfumes.type}</div>
            ))}
        </div>
    </div>;
}