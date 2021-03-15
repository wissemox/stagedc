import React,{useState} from 'react'
import{useDispatch} from 'react-redux'
import {DeleteProduct } from '../../Redux/actions/allActions'
import {UpdatedProduct} from '../../Redux/actions/allActions'
import ModalExample01 from './Model003'
const MappAddproduct02 = ({el}) => {
    const dispatch =useDispatch()
    const DeltedProduct = ()=>{
        dispatch(DeleteProduct(el._id))
    }
    const [blone , setBlone]=useState(false)
    const [name , setname]=useState()
    const [price , setprice]=useState()
    const [Descraption , setDescraption]=useState()
    const getid =() =>{
        setBlone(!blone)
        localStorage.setItem("id",JSON.stringify(el._id) );
    }
    const UpdatedUser=()=>{
        dispatch(UpdatedProduct(el._id,{name,price,Descraption}))
    }
    return (
        <div>
        <div className="Delted">
           <p>{el.name}</p>
           
           <div>
           <button onClick={DeltedProduct}>Delete</button>
          
           <button onClick={getid}>Edit</button>
           </div>
           
        </div>
        {blone ? (<>
        <p>name</p>
        <input value={name} onChange={(e)=>setname(e.target.value)}/>
        {console.log(name)}
        <p>Prix</p>
        <input type="Number" value={price}onChange={(e)=>setprice(e.target.value)}/>
        {console.log(price)}
        <p>Descraption</p>
        <input value={Descraption}onChange={(e)=>setDescraption(e.target.value)}/>
        <button onClick={UpdatedUser}>Sumbite</button>
        </>

        )  :null}
        </div>
    )
}

export default MappAddproduct02
