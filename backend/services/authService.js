const createUser = require("../models/loginSchema")



const registerUser=async(userData)=>{
    const user=await createUser(userData);
    return user;


}

module.exports=registerUser;