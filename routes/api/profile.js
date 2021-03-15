const express = require('express') ;
const router = express.Router() ;

//route get api/Profile
// 1 Test Route 
router.get('/',(req,res)=>res.send('Profile  route'))

module.exports =  router