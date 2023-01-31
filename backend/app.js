const express=require("express")

const connectToMongo=require('./db/conn')
const app=express();

// const customerRoutes=require("./routes/customer")

connectToMongo()
// app.get("/",(req,res)=>{
//     res.send("ok")
// })
app.use(express.json())
app.use(require('./routes/customer'))
app.use(require('./routes/inventory'))
app.use(require('./routes/order'))
app.listen(3005,()=>console.log("Server is up at 3005"));