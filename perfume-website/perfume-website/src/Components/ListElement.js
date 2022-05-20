import styles from '../assets/css/PerfumeList.module.css'
import { useState } from "react";
import classNames from 'classnames/bind';

//props = {id, type, loc}
const ListElement = (props) => {
    
    const [loc, setLoc] = useState(props.loc);
    const locNo = 'loc'+ loc;
    const cx = classNames.bind(styles);

    return (
        <div className={cx('list_element', `${locNo}`)}> #{props.id} {props.type} </div>
    );
}

export default ListElement;
