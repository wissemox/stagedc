import React , {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {FindProductAdmin ,ProductAll03} from '../Redux/actions/allActions'
import AdminCompent from './AdminCompent'
const IsaADmins = () => {
    const disatch = useDispatch()
    const id = JSON.parse(localStorage.getItem('Admins'))
    useEffect(()=>{
        disatch(FindProductAdmin(id)) 
        disatch(ProductAll03()) 
        },[])
        
    const FindAdmin = useSelector(state => state.AdminProduct05.Product.UserUpdatedds)
    const FindProduct01 = useSelector(state => state.ProductAll02.Product.FindProduct)
    return (
        <div>
            {console.log(FindProduct01)}
            {FindAdmin&&FindAdmin.Admins01 ?<AdminCompent FindProduct01={FindProduct01}/> : <p>Spinner</p>}
        </div>
    )
}

export default IsaADmins
