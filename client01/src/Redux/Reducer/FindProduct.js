import {
    GET_FBUSER,
    GET_PRODUCT,
    FIND_PRODUCT,
    FIND_PRODUCTVD
} 
from '../ActionType.js/ActionType'

const ProductValida = {
    ProductFind: [],
  };
  
   const FindProduct02 = (state = ProductValida, { type, payload }) => {
    switch (type) {
      case  FIND_PRODUCTVD:
        return {
          ...state,
          ProductFind:payload,
          
        };
        
      default:
        return state;
    }
  };
  export default FindProduct02