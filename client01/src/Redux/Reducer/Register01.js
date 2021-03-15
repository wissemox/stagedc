import {
    REGISTER_USER
    

} 
from '../ActionType.js/ActionType'

const Register = {
    user: [],
  };
  
   const Register01 = (state = Register, { type, payload }) => {
    switch (type) {
      case  REGISTER_USER:
        return {
          ...state,
          user:payload,
       
          
        };
        
      default:
        return state;
    }
  };
  export default Register01