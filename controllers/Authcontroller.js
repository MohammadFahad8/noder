const jwt = require('jsonwebtoken')
var db = require('../database/index')
const {Op} = require('sequelize');
require('dotenv').config()
const User = db.user;
exports.checkToken =async(req,res)=>
{
   
    console.log("DATA ONE: ", req.cookies.token)
    const req_token = req.cookies.token
    let auth = false;
    if(!req_token)
    {
        return res.json({auth:false,"message":"Login Again"})
    }
    try{
        if(!jwt.verify(req_token,process.env.JWT_SECRET))throw 'token not valid';
        else{
            auth =true;


        }


    }catch(err)
    {
            console.log("Invalid TOken")
    }

    if(!auth)
    {
        return res.json(400).json({auth:false,"message":"token verification failed"})
    }else
    {
        const data = jwt.verify(req_token,process.env.JWT_SECRET)
        console.log(data)
          User.findOne({
            where:{
                id:{
                [Op.eq]:data._id}}}).then((user)=>{
                    
                    if(!user)
                    {
                        return res.status(400).json({"error":"user not found"})
                    }
                    const {id,email}=user
                    return res.status(200).json({auth:true,user:{id,email}})
                })
              
                
    }
}
exports.login = async(req,res)=>{

let auth =false;
    const u  = await User.findOne({
        where:{
            email:{
            [Op.eq]:req.body.email
        }
        }
    })
if(u!=null)
{
    
    const token = jwt.sign({_id: u.id}, process.env.JWT_SECRET)
    
    
const cookie = req.cookies.token;
console.log("I  am cookies",cookie)
if (cookie == undefined){
    
res.cookie('token', token, {httpOnly: true});


}

return res.status(200).json({auth:true,"status":200,message:"login success"});
    // res.json({"message":"Login Successfull"})
}else
{
    res.json({auth:false,"status":400,"message":"Login Failed"})
}

}

exports.logout = (req,res)=>
{
    res.clearCookie('token');
    res.json({auth:false,"message":"Logged out"})
}