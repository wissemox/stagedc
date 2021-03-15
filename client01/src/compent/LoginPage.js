import React, { useState } from "react";
import { render } from "react-dom";
import {Redirect} from 'react-router-dom'
import FacebookLogin from "react-facebook-login";
import {Login02 , Email5} from '../Redux/actions/allActions'
import {useDispatch , useSelector} from 'react-redux'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './login.css'
import {FindProductAdmin} from '../Redux/actions/allActions'

const ReactFacebookLogin = () => {
  const [EmailFb , SetEmailFb]=useState()
  const[email , setEmail]=useState()
  const[password , setPassword]=useState()
  const [Datafinded , UseFindred]=useState(false)
  const[DataFB , userFB]=useState()
  const[FindAdmin , setAdmin]=useState()
  const dispatch = useDispatch()
  const LoginUser = () =>{
    dispatch(Login02({email:email,password:password})) 
    localStorage.setItem("email",JSON.stringify(email) );
    localStorage.setItem("password",JSON.stringify(password) );
  }
  const Auth02 = localStorage.setItem("Auth02",JSON.stringify(email) );
  const isAdmin = useSelector(state => state.AdminProduct05.Product.UserUpdatedds)
  const componentClicked = data => {
    console.log("data", data);
 
  };
  const findEdad=()=>{
    localStorage.setItem("Admins",JSON.stringify(FindAdmin) );
    dispatch(FindProductAdmin(FindAdmin))
    
  }
  
  const responseFacebook = response => {
    // console.log(response.accessToken);
    SetEmailFb(response)
    if(response) {
      userFB(response.email)
      console.log(DataFB)
      dispatch(Email5({email:DataFB}))
      localStorage.setItem("email",JSON.stringify(DataFB) );
    
  }
    console.log(response);
  };
   const isAuth03 = useSelector(state => state.Login.UserLogged)
  return (
    <div>
      
      <Form className="From-flex-box" inline>
     
    
    {isAuth03 &&isAuth03.UserUpdated &&isAuth03.UserUpdated.isAuth02 && <Redirect to="/Dashboard"/>}
    {isAdmin&&isAdmin&&<Redirect to="/Admin"/>}
    
        <div className="Login">
       
      

        <div className="Dazd"><p>backgroundUlra</p> </div>
        <div className="Background">
        
        {console.log(email)}
          <h5>Login Here</h5>
        <Input value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        <Input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="Password" id="exampleName" placeholder="Password" />
      
       {console.log(email)}
        
        

    
      </div>
      <Button onClick={LoginUser} >Submit</Button>
      
      <br />
     
     
      <br />
      <FacebookLogin
        appId="473616477010393"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
      </div>
      <div className="Divad">
      
      </div>
      <button>Fb</button>
    </Form>
    <div className="Divad"> 
    <div className="AS">
    <input value={FindAdmin} onChange={(e)=>setAdmin(e.target.value)}/>
    <button onClick={findEdad}>Submite</button>
    </div>
      <p>dqzd</p>
      
      </div>
    
    </div>
  );
};
export default ReactFacebookLogin;


