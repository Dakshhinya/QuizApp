
const createQuiz=require("../models/quizesSchema");

const createQuizController=async(req,res)=>{

    console.log("Req.body",req.body);

     const teacherId = req.user.id; 
    try{
        const newQuiz=await createQuiz(req.body.quizname,teacherId);
        res.json(newQuiz);
        res.send(201).json({message:"Quiz added successfully"});

    }
    catch(err)
    {
        res.status(400).json({message:err});
    }
}

module.exports=createQuizController;