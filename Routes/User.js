
const express = require('express')
const User = require('../Models/User')


const userRouter = express.Router()

userRouter.post('/add',async(req,res)=>{
    try {
        const found= await User.findOne({email:req.body.email})
        if(found){
            res.status(400).send({msg:'email exists'})
        }
        const user = new User(req.body)
        await user.save()
        res.status(200).send({msg:'User added'})
    } catch (error) {
        res.status(500).send({msg:'User not added'})
    }  
})

userRouter.get('/getUsers',async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).send({msg:'Users list',users})
    } catch (error) {
        res.status(500).send({msg:'Users list not found'}) 
    }
})

userRouter.get('/getOneUser/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const user = await User.findById(id)
        res.status(200).send({msg:'user found',user})
    } catch (error) {
        res.status(500).send({msg:'User not found'})
    }
})

userRouter.delete('/deleteUser/:id',async(req,res)=>{
    try {
        const {id}= req.params
        await User.findByIdAndDelete(id)
        res.status(200).send({msg:'user deleted'})
    } catch (error) {
        res.status(500).send({msg:'User not deleted'}) 
    }
})

userRouter.put('/updateUser/:id',async(req,res)=>{
    try {
        const {id}=req.params
        await User.findByIdAndUpdate(id,{$set:req.body})
        res.status(200).send({msg:'user updated'})
    } catch (error) {
        res.status(500).send({msg:'User not updated'}) 
    }
})


module.exports= userRouter