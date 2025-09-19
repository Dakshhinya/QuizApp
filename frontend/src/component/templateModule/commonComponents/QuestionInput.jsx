import {TextField} from "@mui/material";
import { useState } from "react";

function QuestionInput() {
  const [QuestionText, setQuestionText] = useState("");
  return (
    <>
      <TextField
        type="text"
        label="Enter Question"
        variant="outlined"
        className="w-200"
        value={QuestionText}
        onChange={(e) => setQuestionText(e.target.value)}
      ></TextField>
    </>
  );
}

export default QuestionInput;
