import {
    GET_FBUSER

} 
from '../ActionType.js/ActionType'

const RegisterFB = {
    user: [],
  };
  
   const Register02 = (state = RegisterFB, { type, payload }) => {
    switch (type) {
      case  GET_FBUSER:
        return {
          ...state,
           user:payload,
            
          
        };
        
      default:
        return state;
    }
  };
  export default Register02