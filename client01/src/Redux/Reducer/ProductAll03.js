import {
    GET_FBUSER,
    GET_PRODUCT
} 
from '../ActionType.js/ActionType'

const ProductAll = {
    Product: [],
  };
  
   const ProductAll02 = (state = ProductAll, { type, payload }) => {
    switch (type) {
      case  GET_PRODUCT:
        return {
          ...state,
          Product:payload,
            
          
        };
        
      default:
        return state;
    }
  };
  export default ProductAll02