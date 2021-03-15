import {
LOGIN_USER
} 
from '../ActionType.js/ActionType'

const logged = {
    UserLogged: [],

  };
  
   const Login = (state = logged, { type, payload }) => {
    switch (type) {
      case  LOGIN_USER:
        return {
          ...state,
          UserLogged:payload,
          
       
          
        };
        
      default:
        return state;
    }
  };
  export default Login