import styles from '../../assets/css/Main/PerfumeList.module.css'
import ListElement from "./ListElement";
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";


const PerfumeList = ({allProduct, setType}) => {
    const allProductNames = allProduct.map(function(a) {return a.name;});
    const allProductIntros = allProduct.map(function(a) {return a.image_link.intro_image;});
    const numOfProduct = allProduct.length;

    const [state, setState] = useState({
        num : 1,
        loc : [4,5,6,7],
        product: [1, 2, 3, 0]
    });

    let curr = 1;
    const productList = useRef(null);
    const handleWheel = (event) => {
        event.preventDefault();
        const direction = event.deltaY > 0 ? 'down' : 'up'; 
        if (direction == 'down' && curr < numOfProduct){      
            curr += 1;    
            setState({...state, num: curr});
        }
        else if(direction == 'up' && curr > 1){
            curr -= 1;
            setState({...state, num: curr});
        }
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
    const showIntroImage = () => {
        const index = state.loc.findIndex(e=>e==4);
        const currProduct = state.product[index];
        setType(allProductIntros[currProduct-1]);
    }

    useEffect(()=>{
        productList.current.addEventListener('wheel', handleWheel);
        showIntroImage();
    }, [allProduct]);
    useEffect(()=>{
        makeList();     
    }, [state.num]);
    useEffect(()=>{
        showIntroImage();
        console.log(state);
    },[state.loc])

    return (
        <div className={styles.list_div} ref={productList}>            
            {state.product.map((element, idx) => {      
                const name =  element!==0 ? allProductNames[element-1] : '';         
                const exist = element!==0 ? true : false;
                return(
                    <Link to={exist?"/"+name:"#"} className={exist?styles.text:styles.nolink}>
                        <ListElement id={idx+1} name={exist?name:""} loc={state.loc[idx]} key={idx}/>
                    </Link>
                )               
            })}
        </div>
    )
}
export default PerfumeList;