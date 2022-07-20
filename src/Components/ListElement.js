import styles from '../assets/css/PerfumeList.module.css'
import { useState } from "react";
import classNames from 'classnames/bind';

//props = {id, type, loc}
const ListElement = (props) => {
    
    const locNo = 'loc'+ props.loc;
    const cx = classNames.bind(styles);
    const sendType = () => {
        props.getType(props.type);
    }

    return (
        <div className={cx('list_element', `${locNo}`)} onMouseOver={ sendType }>{props.type} </div>
    );
}

export default ListElement;
