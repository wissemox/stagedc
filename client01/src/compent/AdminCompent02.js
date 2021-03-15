import React from 'react'
import {useDispatch}from 'react-redux'
import {DeleteProduct} from '../Redux/actions/allActions'
const AdminCompent02 = ({el}) => {
    const dispatch = useDispatch()
    const Deleteduser =()=>{
        dispatch(DeleteProduct(el._id))
    }
    return (
        <div>
           < div className="MapUser">
                    <p>{el&&el.name}</p>
                    <p>{el&&el.Prix}</p>
                    <p>{el&&el.Descraption}</p>
                    <img src={el&&el.image}/>
                    <button onClick={Deleteduser}>Delete</button>
                    </div>
        </div>
    )
}

export default AdminCompent02
