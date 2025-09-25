import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function QuizName(){
    const navigate=useNavigate();

    const [quizname,setQuizName]=useState(""); 
    const token=localStorage.getItem("token");
    const handleNavigationToAddQuestions=async()=>{
        try{
            const res=await axios.post('http://localhost:3000/api/auth/quiz/create',{quizname},            
            {
                headers:{
                    Authorization : `Bearer ${token}`
                }}
        )
            console.log(res);
            navigate('/teacher-dashboard/add-questions')
        }
        catch(err){
            console.error('failed', err);
        }
         navigate('/teacher-dashboard/add-questions');
    }
   
    return (
        <div className="flex flex-col justify-center">
        <div className=" flex flex-col p-10 gap-3 justify center items-center">
            <TextField 
            label="Enter the quiz name"
            variant="outlined"
            value={quizname}
            onChange={(e)=>setQuizName(e.target.value)}
            />
            
            <Button variant="contained" color="secondary"
           onClick={handleNavigationToAddQuestions}>Add  Questions
            </Button>

        </div>
        </div>
    )
}

export default QuizName;