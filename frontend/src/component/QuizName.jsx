import { Button, TextField } from "@mui/material";
import { useState } from "react";

function QuizName(){

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
            <Button variant="contained" color="secondary">
                Add Questions
            </Button>

        </div>
        </div>
    )
}

export default QuizName;