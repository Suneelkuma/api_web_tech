const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const inventorySchema=new Schema({
    inventoryType:{type:String,required:true},
    inventoryname:{type:String,required:true,unique:true},
    quantity:{type:Number,required:true}
})

const Inventory=mongoose.model("inventory",inventorySchema);

module.exports=Inventory