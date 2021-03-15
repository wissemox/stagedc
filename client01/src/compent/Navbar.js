import React, { useState , useEffect } from 'react';
import {Link} from 'react-router-dom'

import {useDispatch , useSelector} from 'react-redux'

import {Redirect} from 'react-router-dom'
import './login.css'
const Navbar02 = (props) => {

  
  
  return (
    <div>
         
      <div>
          
            <div className="Morgfd">
            <h1>WISSEMOX</h1>
        <div className="Madzf">
            <Link to="/login"> <p>LOGIN</p></Link>
           <Link to="/register"> <p>REGISTER</p></Link>
            <p>ABOUT</p>
            <p>WORKS</p>
            <p>CONTACT</p>
            </div>
            </div>
            <div className="Morge">
              <div className="Morge02">
              <h1>WELCOME</h1>
              <p>dzafazdazfad azdazfdafazd dzafazdazfad azdazfdafazda <br/>dzafazdazfad azdazfdafazd dzafazdazfad azdazfdafazda <br/> dazfaz fadaz</p>
          
              <button className="Buttuon">Contact us</button>
              </div>
              </div>
            
        </div>
        <div className="Chapter2">
        <h4>About us </h4> 
          <h6>dazfadz dazfazdazfad fiazdhbafiazhd fzaodjazfjdzafzad zdafzadaf afazdaz <br/> dazfazd ojazfazdfn dazfaz </h6>
          <div className="Das">
          <img src="12.png"/>
          <img src="13.png"/>
          <img src="12.png"/>
          </div>
          <div className="adqz">
            <p>Servrce</p>
            <p>dqzfqzz zfqzdqz</p>
            <p>fdDAZFADZ</p>
          </div>
          </div>
        <div>
        </div>
       <div className="Dazam">
         <h2>Service</h2>
       </div>
    </div>
  );
}

export default Navbar02;
