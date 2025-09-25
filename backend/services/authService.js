const createUser = require("../models/SignupSchema")
const validUser=require("../models/loginSchema")


const registerUser=async(userData)=>{
    const user=await createUser(userData);
    return user;


}

const loginUser=async(userData)=>{
   
     const loguser = await validUser(userData);
     if(!loguser)
     {
         return null;
     }
     return{
      email: loguser.emailid,
      name: loguser.name,
      role: loguser.role,  
    }
    
 
   
}

module.exports={registerUser,loginUser};