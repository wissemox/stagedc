import {combineReducers} from 'redux'
import  Register01 from './Register01'
import Login from './login'
import Register02 from './RegisterFb'
import ProductAll02 from './ProductAll03'
import FindProduct01 from './FindProduct'
import AdminProduct05 from './isAdminReducer'
import FindProduct02 from './FindProduct'
export default combineReducers({Register01,Login,Register02,ProductAll02,FindProduct01,AdminProduct05,FindProduct02})