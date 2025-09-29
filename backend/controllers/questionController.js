const createQuestion = require('../models/questionSchema')

const createNewQuestion = async(req,res)=>{
    try{
        const newQuestion = await createQuestion(req.body);
        res.status(201).json(newQuestion);

    }catch(err){
        
        console.error('❌ Error creating question:', err.message);
        res.status(400).json({err});

    }
}
module.exports=createNewQuestion;
