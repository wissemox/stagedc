import React from 'react'
import './login.css'
import {useDispatch} from 'react-redux'
import {DeleteVD} from "../Redux/actions/allActions"
const AdminCompent03 = ({el}) => {
    const dispatch = useDispatch()
    const ValidProduct = () =>{
        dispatch(DeleteVD(el._id))
    }
    return (
        <div className="qdwa">
           
            <p>{el.name}</p>
            <p>{el.Prix}</p>
           <img src={el.image}/>
           <button onClick={ValidProduct}>Valide</button>
        </div>
    )
}

export default AdminCompent03
