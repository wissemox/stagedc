const express = require('express') ;
const router = express.Router() ;
//route get api/Auth
// 1 Test Route 
router.get('/',(req,res)=>res.send('Auth  route'))

module.exports =  router