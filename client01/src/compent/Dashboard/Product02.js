import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch ,useSelector} from 'react-redux'
import {ProductAll03} from '../../Redux/actions/allActions'
import MapProdut from './MapProdut'
const Product02 = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(ProductAll03()) 
    },[])
    const Product = useSelector(state => state.ProductAll02.Product.FindProduct)
    return (
        
        <div className="navbarar0">
                <div className="Navbar">
                <Link to="/Dashboard"><p>goBack</p></Link> 
                
                </div>
                <div className="DAa">
                {Product && Product.map((el)=><MapProdut el={el}/>)}
                </div>
            </div>
    )
}

export default Product02
