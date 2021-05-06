const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require('jsonwebtoken');
const emailExisyence=require('email-existence');

const Model=require("../models/user.model");
const config=require('config');
const secret=config.get('JWT_KEY');
////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


module.exports.register=async(req,res,next)=>{
    let {error}= Model.validateSignup(req.body);
    if(error)
    return res.status(400).send({ message:error.details[0].message});
    const hashpass= bcrypt.hashSync(req.body.password);
    
  
  
// else{ 

//    await Model.UserModel.findOne({Email:req.body.email}).then((err,user)=>{
//      if(user)
//        res.status(422).send({message:'user already exist'});
//       return;
//     });

await Model.UserModel.create({ 
    Fname:req.body.firstName,
    Lname:req.body.lastName,
    UserName:req.body.email.split('@')[0],
    Email:req.body.email,
    Date_joined:Date.now(),
    Age:(req.body.age),
    Password:hashpass
},(err,user)=>{

    if(err){ 
        if(err.keyValue)
        return res.status(422).send({message:'user already exist'});
      return res.status(400).send({message:"bad request, error while trying to insert user in database,"+
                           " make sure you sent the data with the right sntax"});
            // console.log(err);
        }              
      res.locals.userid=user._id;
      next();
}
);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.GetUser=(req,res)=>{
    Model.UserModel.findById({_id:res.locals.userid},{Password:0},(err,user)=>{
        if(err)
          res.status(400).send({message:'bad request'});
          if(!user)
          res.status(404).send({message:'user not found'});
          res.status(200).send(user);



    })  





};
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.login=async(req,res,next)=>{
    let {error}= Model.validateLogin(req.body);
    if(error)
    return res.status(400).send({ message:error.details[0].message});

   await Model.UserModel.findOne({Email:req.body.email},(_err,_user)=>{
        if(!_user.isActive)
        return res.status(500).send({message:'you didnt confirm your email yet please confirm it before loging again'});

        if(_user){
            
            bcrypt.compare(req.body.password,_user.Password,(err)=>{

                if(err){
                    return res.status(401).send({message:'wrong password inserted'});
                    
                }
                res.locals.userid=_user._id;
                next();
                return;

            })
            return;
        }
        if(_err){
            res.status(401).send({message:"wrong Email inserted,no user with this mail"});
        }




});


}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports.VerifyEmail=async(req,res)=>{
    debugger
let token=req.params.token;
await jwt.verify(token,secret,async(err,decoded)=>{

let email=decoded.email;

await Model.UserModel.findOne({Email:email},(err,user)=>{
if(err)
return res.send('<h1>no such a user with this mail</h1>');
else{
    user.isActive=true;
    user.save();
    return res.status(201).send('<h1>user has been confirmed</h1>');

}



});



})




}
