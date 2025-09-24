
const registerUser=require('../services/authService')

exports.signup=async(req,res)=>{
     console.log("Received body:", req.body);
    try{

        const newUser= await registerUser(req.body);
        res.send({message:"user created successfully"});
    }
    catch(err)
    {
         console.error("Signup error:", err);
        res.status(400).json({error:err.message});
    }
}

