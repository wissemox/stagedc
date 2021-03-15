const express = require('express') ;
const router = express.Router() ;
const Product = require('../../config/Module/Product')
const ValidProduct = require('../../config/Module/ValidProduct')
//route get api/Post
// 1 Test Route 

router.get('/FindProduct',async(req,res)=>{
    try{
        const FindProduct = await Product.find()
        res.json({msg:"Data Fatched",FindProduct})
    }catch(err){
        console.error(err)
    }
})

router.post('/AddProduct',async(req,res)=>{
    const {name,Prix,Descraption,image}=req.body
    try{
        const newProduct = new Product({
            name,
            Prix,
            Descraption,
            image
        })
        const allPProduct = await newProduct.save()
        res.json({msg:"Data added",allPProduct})
    }catch(err){
        console.error(err)
    }
})
router.delete('/DeletedUser/:_id',async(req,res)=>{
    const {_id} = req.params
    try{
        const DeletedUser = await Product.findOneAndDelete({_id})
        res.json({msg:"Delte user jawk bahi",DeletedUser})
    }catch(err){    
        console.log(err)
    }
})
router.put('/updateInfo/:_id',  async (req, res) => {
    const {_id} = req.params;
    try{
    const updatedUser = await Product.findOneAndUpdate({_id}, { $set: req.body },{new:true})
    /*const salt = 10 
    const hashedPassword = await bcrypt.hash(password,salt)
     updatedUser.password=  hashedPassword*/

      res.send({msg:"updated",updatedUser})
    }catch(error){
        console.log(error)
     }
     
 })

 router.get('/findone01/:_id',  async (req, res) => {
    const {_id} = req.params;
    try{
    const UserFinded = await Product.findOne({_id})
    /*const salt = 10 
    const hashedPassword = await bcrypt.hash(password,salt)
     updatedUser.password=  hashedPassword*/

      res.send({msg:"updated",UserFinded})
    }catch(error){
        console.log(error)
     }
     
 })

 router.post('/IsAdmin',async(req,res)=>{
    const {name,Prix,Descraption,image}=req.body
    try{
        const newProduct = new Product({
            name,
            Prix,
            Descraption,
            image
        })
        const allPProduct = await newProduct.save()
        res.json({msg:"Data added",allPProduct})
    }catch(err){
        console.error(err)
    }
})
 router.post('/ValidProduct',async(req,res)=>{
    const {name,Prix,Descraption,image}=req.body
    try{
        const NewProductValid = new ValidProduct({
            name,
            Prix,
            Descraption,
            image
        })
        const allPProduct = await NewProductValid.save()
        res.json({msg:"Data added",allPProduct})
    }catch(err){
        console.error(err)
    }
})
router.get('/FindValidPr',async(req,res)=>{
    try{
        const ProductVD = await ValidProduct.find()
        res.json({msg:"Product find",ProductVD})
    }catch(err){
        console.log(err)
    }
})
router.delete('/ValidProduct/:_id',async(req,res)=>{
    const {_id} = req.params
    try{
        const DeletedUser = await ValidProduct.findOneAndDelete({_id})
        res.json({msg:"Delte user jawk bahi",DeletedUser})
    }catch(err){    
        console.log(err)
    }
})
module.exports =  router