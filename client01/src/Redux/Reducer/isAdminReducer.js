import {
    FIND_ADMIN
} 
from '../ActionType.js/ActionType'

const Admin05 = {
    Product: [],
  };
  
   const AdminProduct05 = (state = Admin05, { type, payload }) => {
    switch (type) {
      case  FIND_ADMIN:
        return {
          ...state,
          Product:payload,
            
          
        };
        
      default:
        return state;
    }
  };
  export default AdminProduct05