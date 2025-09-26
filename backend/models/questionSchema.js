const pool=require('../DB/Database');

const createQuestion=async({quizId,type,question,answer})=>{
    const result=await pool.query('INSERT INTO questions(quizid,questionText,question_type,answer) VALUES($1,$2,$3,$4) RETURNING *',[quizId,question,type,answer]);
    return result.rows[0]; 

}

module.exports=createQuestion;