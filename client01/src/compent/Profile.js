import React,{useEffect} from 'react'

import {Redirect}from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import {Login02} from '../Redux/actions/allActions'

const Profile = () => {
    const email = JSON.parse(localStorage.getItem('email'))
const password = JSON.parse(localStorage.getItem('password'))
const dispatch = useDispatch()
const loginuser= () =>{
  dispatch(Login02({email:email ,password:password })) 

}
useEffect(()=>{
loginuser()
},[])
    const isAuth03 = useSelector(state => state.Login.UserLogged)
    return (
        <div>
            {/* {isAuth03 && isAuth03.UserUpdated&&isAuth03.UserUpdated.isAuth02 ? <Redirect to="/Dashboard"/> :  <Redirect to="/"/> } */}
            {isAuth03 && isAuth03.UserUpdated&&isAuth03.UserUpdated.isAuth02 ? <p>Welcome wissem</p> : <p>no Profile found</p> }
            {console.log(isAuth03)}
            <p>dazd</p>
        </div>
    )
}

export default Profile
