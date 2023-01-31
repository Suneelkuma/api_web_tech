const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const orderSchema=new Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customer'
    },
    inventory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'inventory'
    },
    itemname:{type:String,required:true},
    quantity:{type:Number,required:true}
})

const Order=mongoose.model("order",orderSchema);

module.exports=Order