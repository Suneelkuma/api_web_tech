const express=require('express');

const router=express.Router();

const fetchCustomer=require('../middleware/fetchcustomer')
const Order=require('../models/Order')

// createOrders

router.post('/createOrder',fetchCustomer,async (req,res)=>{
    try {
      
  const {itemname,quantity}=req.body;
    

 let   order= await Order.create({
    itemname,
    quantity,
    customer:req.customer.id
    })
    res.status(200).json({
        status:"Success",
        order
    })
    
    } catch (error) {
        res.status(200).json({
            status:"Failed",
        message:error.message
        })
    }

   
})


// get all orders

router.get('/orders',async(req,res)=>{
    try {
       
   

  let  orders= await Order.find()
    res.status(200).json({
        status:"Success",
        orders
    })
    
    } catch (error) {
        res.status(200).json({
            status:"Failed",
        message:error.message
        })
    }

   
})





module.exports=router