import React ,{useEffect} from 'react'
import './login.css'
import Model05 from './Model05'
import {DeleteProduct ,FindProductADD} from '../Redux/actions/allActions'
import {useDispatch , useSelector} from 'react-redux'
import AdminCompent02 from './AdminCompent02'
import AdminCompent03 from './AdminCompent03'
import { Link } from 'react-router-dom'
const AdminCompent = ({FindProduct01}) => {
    const dispatch = useDispatch()
    const Lgout =() =>{
        localStorage.removeItem("Admins");

    }
    const ProductVD = useSelector(state => state.FindProduct02.ProductFind.ProductVD)
    useEffect(()=>{
        dispatch(FindProductADD()) 
        },[])
    return (
        <>
        <div className="BackgroundAll">
            
           <div className="NavbAR005">
         
               <h1>Product</h1>
              <a href="/"> <button onClick={Lgout} className="azdwla">Logout</button></a>
               {FindProduct01&&FindProduct01.map((el)=><AdminCompent02 el={el}/> )}
               <div className="zda">
               <h2>ProductVD</h2>
               {console.log(ProductVD)}
               {ProductVD&&ProductVD.map((el)=><AdminCompent03 el={el}/>)}
               </div>
               
           </div>
           <div>
               
           </div>
           {/* Product */}
      
        </div>
        
        </>
    )
}

export default AdminCompent
