const createQuestion=require('../models/questionSchema');

const createNewQuestion=async(req,res)=>{
    try{
        const newQuestion=await createQuestion(req.body);
        res.send(201).json(newQuestion);

    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({err});
    }

}

module.exports=createNewQuestion;
