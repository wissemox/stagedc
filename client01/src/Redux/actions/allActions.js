import axios from 'axios'
import { 
    REGISTER_USER,
    LOGIN_USER,
    GET_FBUSER,
    GET_PRODUCT,
    FIND_PRODUCT,
    FIND_ADMIN,
    FIND_PRODUCTVD
}from '../ActionType.js/ActionType'

export const Register = (AllUser02) =>dispatch => { 
    axios.post('/api/users',AllUser02)
    .then(res =>dispatch({type:REGISTER_USER , payload:res.data}))
    .catch(err => console.log(err))
}
export const Login02 = (UserRegister) => dispatch => { 
    axios.post('/api/users/login',UserRegister)
    .then(res=>dispatch({type:LOGIN_USER , payload:res.data}))
    .catch(err=>console.log(err))
}
export const FBREGISTER =  (USERFB) => dispatch => {
    axios.post('/api/users/User/FB',USERFB)
    .then(res=>dispatch({type:GET_FBUSER,payload:res.data}))
    .catch(err=>console.log(err))
}
export const Email5 = (Email01) =>dispatch => { 
    axios.post('/api/users/UserFinded',Email01)
    .then(res =>dispatch({type:LOGIN_USER  , payload:res.data}))
    .catch(err => console.log(err))
}
export const ProductAll03 = () =>dispatch => { 
    axios.get('/api/post/FindProduct')
    .then(res =>dispatch({type:GET_PRODUCT , payload:res.data}))
    .catch(err => console.log(err))
}
export const AddProduct = (AddProduct01)=>(dispatch)=>{
    axios.post(`/api/post/AddProduct`,AddProduct01)
    .then(res => dispatch(ProductAll03()))
    .catch(err=>console.log(err))
  }
  export const EditArticle = (EmailContact,editeContact)=>(dispatch)=>{
    axios.put(`/api/users/update/${EmailContact}`,editeContact)
   
    .catch(err=>console.log(err))
  }
  export const DeleteProduct = (DeletedPr)=>(dispatch)=>{
    axios.delete(`/api/post/DeletedUser/${DeletedPr}`)
    .then(res => dispatch(ProductAll03()))
    .catch(err=>console.log(err))
  }
  export const UpdatedProduct = (IdProduct,Updated)=>(dispatch)=>{
    axios.put(`/api/post/updateInfo//${IdProduct}`,Updated)
    .then(res => dispatch(ProductAll03()))
    .catch(err=>console.log(err))
  }
  export const FindProduct02 = (Id) =>dispatch => { 
    axios.get(`/api/post/findone01/${Id}`)
    .then(res =>dispatch({type:FIND_PRODUCT  , payload:res.data}))
    .catch(err => console.log(err))
}
export const FindProductAdmin = (Id) =>dispatch => { 
  axios.get(`/api/users/Findoe/${Id}`)
  .then(res =>dispatch({type:FIND_ADMIN  , payload:res.data}))
  .catch(err => console.log(err))
}
export const FindProductVD = () =>dispatch => { 
  axios.get(`/api/post/FindValidPr/`)
  .then(res =>dispatch({type:FIND_PRODUCTVD , payload:res.data}))
  .catch(err => console.log(err))
}
export const FindProductADD = () =>dispatch => { 
  axios.get(`/api/post/FindValidPr/`)
  .then(res =>dispatch({type:FIND_PRODUCTVD , payload:res.data}))
  .catch(err => console.log(err))
}


export const ADDProductVD = (ProductVD) =>dispatch => { 
  axios.post(`/api/post/ValidProduct/`,ProductVD)
  .then(res =>dispatch(FindProductADD()))
  .catch(err => console.log(err))
}
 export const DeleteVD = (DeletedPRD) =>dispatch => { 
   axios.delete(`/api/post/ValidProduct/${DeletedPRD}`)
   .then(res =>dispatch(FindProductADD()))
   .catch(err => console.log(err))
}
