const createUser = require("../models/loginSchema")
const validUser = require("../models/loginnSchema")



const registerUser=async(userData)=>{
    const user=await createUser(userData);
    return user;


}

const loginUser=async(userData)=>{
    const user = await validUser(userData);
    return user;
}

module.exports={registerUser,loginUser};
// module.exports=loginUser;