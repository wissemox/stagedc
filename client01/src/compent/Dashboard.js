import React,{useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Login02 ,Email5} from '../Redux/actions/allActions'
import {BrowserRouter ,Route}from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import Profile from './Profile'
import Dashboard02 from './Dashboard/Dashboard'
const Dashboard = () => {
    const dispatch=  useDispatch()
    const email =  JSON.parse(localStorage.getItem('email'))
    const password =  JSON.parse(localStorage.getItem('password'))
    const email02 =  JSON.parse(localStorage.getItem('email'))
    const getUser =() =>{
        dispatch(Login02({email:email ,password:password })) 
        dispatch(Email5({email:email02}))
    }
    useEffect(()=>{
        getUser()
     
    },[])
    const isAuth03 = useSelector(state => state.Login.UserLogged)
    return (
        <div>
             {isAuth03 && isAuth03.UserUpdated&&isAuth03.UserUpdated.isAuth02 ? <>
                {console.log(email)}
            {console.log(password)}
            <div>
                <Dashboard02/>
            </div>
            {/* Route */}</> :  <p>spinner ...</p> }
          
         
        </div>
     
    )
}

export default Dashboard
