const pool=require('../DB/Database')

const createQuiz=async(quizname,teacherid)=>{
    const result=await pool.query("INSERT INTO quizzes(quizname,teacherid) VALUES($1,$2) RETURNING *",[quizname,teacherid])
    return result.rows[0];
}
module.exports=createQuiz;