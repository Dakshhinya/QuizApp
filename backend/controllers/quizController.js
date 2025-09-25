const createQuiz = require("../models/quizesSchema")

const createQuizController=async(req, res)=>{
    try{
        const newQuiz = await createQuiz(req.body.quizname, req.user.id)
        res.send(201).json({message: "Quiz added successfully!"})
    }
    catch(err){
        res.status(400).json({message:err});
    }
}
module.exports=createQuizController;