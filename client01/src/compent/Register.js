import React , {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useDispatch , useSelector} from 'react-redux'
import {Register,FBREGISTER} from '../Redux/actions/allActions'
import {Redirect} from 'react-router-dom'
import FacebookLogin from "react-facebook-login";
import './login.css'
const Example = (props) => {
const [name , setName]=useState('')
const [email , setEmail]=useState('')
const [password , setPassword]=useState('')
const dispatch = useDispatch()
const RegisterUser=()=>{ 
    dispatch(Register({name:name ,email:email ,password:password}))
}
const isAuth00 = useSelector(state => state.Register01.user)

const componentClicked = data => {
  console.log("data", data);

};

const responseFacebook = response => {
  // console.log(response.accessToken);
  
  if(response) {
      dispatch(FBREGISTER({name:response.name , email:response.email , password:response.id,FacebookIMG:response.picture.data.url }))
      localStorage.setItem("Auth02",JSON.stringify(response.email) );

}
  console.log(response);
};
const isAuth000 = useSelector(state => state.Register02.user.SaveUserFb)
  return (
      <div className="awasg">
    <Form className="adazdf">
     {isAuth00 && isAuth00.isAuth && <Redirect to='/login'/>}
     {isAuth000 && isAuth000.isAuth02 && <Redirect to='/login'/>}
      <Row form>
        <Col md={6}>
          <FormGroup  className="adazdaf">
             
            <Label for="exampleEmail">Email</Label>
            {email.length===0? <p> email not filed </p> : null}
            <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
             <p>{isAuth00.msg}</p>
             {name.length>=7? <p>you reched max charchter in your name </p> : null}
             {name.length===0? <p> name not filed </p> : null}
          </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
            <Label for="examplePassword">name</Label>
            {password.length>=7? <p>you reched max charchter in your password </p> : null}
            {password.length===0? <p>password not filed </p> : null}
            <Input  value={name} onChange={(e)=>setName(e.target.value)}  name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <FormGroup>
            
          </FormGroup>
        </Col>
      </Row>
      <Label className="dwa" for="examplePassword">Password</Label>
            <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      <br />
      <FacebookLogin
        appId="473616477010393"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
      <Button onClick={RegisterUser}>Sign in</Button>
    </Form>
    </div>
  );
}

export default Example;
