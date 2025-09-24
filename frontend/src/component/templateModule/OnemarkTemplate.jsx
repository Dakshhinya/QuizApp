import { Card ,TextField} from "@mui/material";
import QuestionInput from "./commonComponents/QuestionInput";
import SaveButton from "./commonComponents/SaveButton";
import CancelButton from "./commonComponents/CancelButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../store/questionsSlice";

function OnemarkTemplate() {
  const [QuestionText, setQuestionText] = useState("");  
  const [answer, setAnswer] = useState("");
  const dispatch=useDispatch();

  const handleSave=()=>{
   
  dispatch(
  addQuestion({
    
      type: "oneMark",
      question: QuestionText,
      answer: answer,
   
  })
);
    setQuestionText("");
    setAnswer("");
  }


  const  handleCancel=()=>{
    setQuestionText("");
    setAnswer("");
  };


  return (
    <Card className="flex flex-col justify-center items-center mt-5 p-4 ">
      <div className="flex flex-col">
        <QuestionInput value={QuestionText} onChange={setQuestionText} />
          <div className="flex justify-center mt-5 mb-5 ">
          <TextField
            label="Answer"
            placeholder="Enter correct answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            size="small"
          />
        </div>
        <div className="flex justify-center gap-4">
          <SaveButton onClick={handleSave} />
          <CancelButton onClick={handleCancel} />
        </div>
      </div>
    </Card>
  );
}
export default OnemarkTemplate;
