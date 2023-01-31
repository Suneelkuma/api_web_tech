const express=require('express');

const router=express.Router();


const Inventory=require('../models/Inventory')
router.post('/createInventory',async(req,res)=>{
    try {
        let inventory=await Inventory.findOne({ inventoryname:req.body. inventoryname});
    if(inventory){
        return res.status(400).json({error:"sorry a name with this inventoryname already exist"})
    }

    inventory= await Inventory.create({
        inventoryType:req.body. inventoryType,
        inventoryname:req.body. inventoryname,
        quantity:req.body.quantity
    })
    res.status(200).json({
        status:"Success",
        inventory
    })
    
    } catch (error) {
        res.status(200).json({
            status:"Failed",
        message:error.message
        })
    }

   
})


// get all inventory

router.get('/inventory',async(req,res)=>{
    try {
       
   

  let  inventory= await Inventory.find()
    res.status(200).json({
        status:"Success",
        inventory
    })
    
    } catch (error) {
        res.status(200).json({
            status:"Failed",
        message:error.message
        })
    }

   
})


// find by name of inventory

router.get('/inventory/:inventoryType',async(req,res)=>{
    try {
       
   

  let  inventory= await Inventory.find({inventoryType:req.params.inventoryType})
    res.status(200).json({
        status:"Success",
        inventory
    })
    
    } catch (error) {
        res.status(200).json({
            status:"Failed",
        message:error.message
        })
    }

   
})


module.exports=router