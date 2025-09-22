import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuizName(){
    const navigate=useNavigate();

    const handleNavigationToAddQuestions=()=>{
         navigate('/add-questions');
    }

    const [quizname,setQuizName]=useState("");
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