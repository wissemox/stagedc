const express = require('express') ;
const router = express.Router() ;
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const {check,validationResult}=require('express-validator/check')
const User = require('../../config/Module/User')
const Admins = require('../../config/Module/isAdmins')
//route Post api/User
// 1 Test Route 
router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','please include a valid email').isEmail(),
    check('password', 'Pleqse enter q pqssword with 6 or more chqrcters').isLength({min:6})
    
],async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors :errors.array()})
    }
    const {name , email ,password}=req.body
    try{
        let user = await User.findOne({email})
     
        if(user){
            res.send({msg:"User alerdy exist"})
        }
        const avatar =gravatar.url(email,{
            s:'200',
            r:'pg', 
            d:'mm'
        })
        user = new User({
            name , 
            email , 
            avatar ,
            password , 
            isAuth:true
        })
        const salt = await bcrypt.genSalt(10); 
        // Return jsonwebtoken
        user.password =await bcrypt.hash(password , salt) 
        await user.save()
        res.send(user)
        
    }catch(err){
        console.error(err)
        res.status(500).send('Server Ecryptet')

    }
    //Get avatar  
    
})

router.post('/login',async(req , res) => { 
    const {email , password}=req.body 
    try{
    const userfund = await User.findOne({email})
    if(!userfund) {
        res.json({msg:"There is no user",email})
    }
    const isMatch = await bcrypt.compare(password ,userfund.password)
    if(!isMatch){
        res.json({msg:"Password inCorrect"})
    }
    const UserUpdated = await User.findOneAndUpdate({email} ,{$set:{isAuth02:true}},{new: true })
    if(UserUpdated&&UserUpdated) {
        res.json({msg:"Data Fatched",UserUpdated})
    }
    
    
    }catch(error){
        res.status(500).send('Server ecrypte')
        console.log(error)
    }
})
router.post('/User/FB',async(req,res)=>{
    const {email, name ,password,FacebookIMG } =req.body
    try{
        const newUser = new User({
            email,
            name,
            password,
            FacebookIMG,
            isAuth02:true
        })
        const SaveUserFb = await newUser.save()
        res.json({msg:"Data fatched",SaveUserFb})
    }catch(err){
        res.status(500).send('Server ecrypte')
        console.log(err)
    }
})
router.post('/UserFinded',async(req,res)=>{
    const{email}=req.body
    try{
        const UserUpdated=await User.findOne({email})
        res.json({msg:"Data fatched",UserUpdated})
    }catch(err){
        console.log(err)
    }
})
router.post('/update',async(req,res)=>{
    const{name , email }=req.body; 
    try{
        const newUser = new Admins({
            email,
            name
        })
        const SaveUserFb = await newUser.save()
        res.json({msg:"Data fatched",SaveUserFb})
    }catch(err){
        res.status(500).send('Server ecrypte')
        console.log(err)
    }
    
})
router.get('/Findoe/:_id',async(req,res)=>{
    const {_id} = req.params;
    try{
        const UserUpdatedds = await Admins.findOneAndUpdate({_id},{$set:{Admins01:true}},{new: true })
        res.json({msg:"Finded",UserUpdatedds})
    }catch(err){
        console.log(err)
    }   
})
module.exports =  router