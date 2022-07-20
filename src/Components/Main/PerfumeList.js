import styles from '../assets/css/PerfumeList.module.css'
import ListElement from "./ListElement";
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";


const PerfumeList = ({getType2, allProduct}) => {
    const allProductNames = allProduct.map(function(a) {return a.name;});
    const allProductTypes = allProduct.map(function(a) {return a.type;});
    const numOfProduct = allProduct.length;

    const [state, setState] = useState({
        num : 1,
        loc : [4,5,6,7],
        product: [1, 2, 3, 0]
    });

    const getType = (text) => {
        getType2(text);
    }

    let curr = 1;
    const productList = useRef(null);
    const handleWheel = (event) => {
        event.preventDefault();
        const direction = event.deltaY > 0 ? 'down' : 'up'; 
        if (direction == 'down' && curr < numOfProduct){      
            curr += 1;    
        }
        else if(direction == 'up' && curr > 1){
            curr -= 1;
        }
        setState({...state, num: curr});
    }

    const makeList = () => {
        if(state.num == 1){
            setState({
                ...state,
                loc : [4,5,6,7],
                product: [1,2,3,0]
            })
        }
        else if(state.num == 2){
            setState({
                ...state,
                loc : [3,4,5,6,7],
                product: [1,2,3,4,0]
            })
        }
        else if(state.num == 3){
            setState({
                ...state,
                loc : [2,3,4,5,6,7],
                product: [1,2,3,4,5,0]
            })
        }
        else if(state.num == numOfProduct-2){
            const n = numOfProduct
            setState({
                ...state,
                loc : [1,2,3,4,5,6],
                product: [0,n-4,n-3,n-2,n-1,n]
            })
        }
        else if(state.num == numOfProduct-1){
            const n = numOfProduct
            setState({
                ...state,
                loc : [1,2,3,4,5],
                product: [0,n-3,n-2,n-1,n]
            })
        }
        else if(state.num == numOfProduct){
            const n = numOfProduct
            setState({
                ...state,
                loc : [1,2,3,4],
                product: [0,n-2,n-1,n]
            })
        }
        else{
            const n = state.num
            setState({
                ...state,
                loc : [1,2,3,4,5,6,7],
                product: [0,n-2,n-1,n,n+1,n+2,0]
            })
        }
    }

    useEffect(()=>{
        productList.current.addEventListener('wheel', handleWheel);
    }, [allProduct]);
    useEffect(()=>{
        makeList();
    }, [state.num])

    return (
        <div className={styles.list_div} ref={productList}>            
            {state.product.map((element, idx) => {      
                const name =  element!==0 ? allProductNames[element-1] : '';         
                const type = element!==0 ? allProductTypes[element-1] : '';
                const exist = element!==0 ? true : false;
                return(
                    <Link to={exist?"/"+name:"#"} className={exist?styles.text:styles.nolink}>
                        <ListElement getType={getType} id={idx+1} type={exist?type:""} loc={state.loc[idx]} key={idx}/>
                    </Link>
                )               
            })}
        </div>
    )
}
export default PerfumeList;