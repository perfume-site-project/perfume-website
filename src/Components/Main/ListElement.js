import styles from '../../assets/css/Main/PerfumeList.module.css'
import classNames from 'classnames/bind';

//props = {id, type, loc}
const ListElement = (props) => {
    
    const locNo = 'loc'+ props.loc;
    const cx = classNames.bind(styles);

    return (
        <div className={cx('list_element', `${locNo}`)}>{props.name} </div>
    );
}

export default ListElement;
