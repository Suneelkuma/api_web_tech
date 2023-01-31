const jwt=require("jsonwebtoken")

const JWT_SECRET="IAmLearningMERN";

const fetchCustomer=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({error:"please authenticate using a valid token"})
    }
    try {
        const data=jwt.verify(token,JWT_SECRET);
        req.customer=data.customer;
        next()
    } catch (error) {
        res.status(401).send({error:"please authenticate using a valid token"})
    }
}
module.exports=fetchCustomer;