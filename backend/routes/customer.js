const express=require('express');

const router=express.Router();

const jwt=require('jsonwebtoken');
const JWT_SECRET="IAmLearningMERN"
const Customer=require('../models/Customer')

// create customer

router.post('/createCustomer',async(req,res)=>{
    try {
        let customer=await Customer.findOne({email:req.body.email});
    if(customer){
        return res.status(400).json({error:"sorry a user with this email already exist"})
    }

    customer= await Customer.create({
        name:req.body.name,
        email:req.body.email
    })
    const data={
        customer:{
            id:customer.id
        }
    }
    const authtoken=jwt.sign(data,JWT_SECRET)
    res.status(200).json({
        status:"Success",
       customer,
        authtoken
    })
    
    } catch (error) {
        res.status(200).json({
            status:"Failed",
        message:error.message
        })
    }

   
})


// get all customer

router.get('/customerDetails',async(req,res)=>{
    try {
       
   

  let  customer= await Customer.find()
    res.status(200).json({
        status:"Success",
        customer
    })
    
    } catch (error) {
        res.status(200).json({
            status:"Failed",
        message:error.message
        })
    }

   
})

module.exports=router