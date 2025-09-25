import { FormControlLabel, RadioGroup, Radio, Card } from "@mui/material";
import QuestionInput from "./commonComponents/QuestionInput";
import SaveButton from "./commonComponents/SaveButton";
import CancelButton from "./commonComponents/CancelButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../store/questionsSlice";

function TrueOrFalseTemplate() {
  const [TFQuestionText,setTFQuestionText]=useState("");
  const [TFanswer, setTFAnswer] = useState(null);
  const dispatch=useDispatch();


  const handleSave=()=>{
    dispatch(addQuestion({
      type:"TrueorFalse",
      question:TFQuestionText,
      answer:TFanswer
    }))

    setTFQuestionText("");
    setTFAnswer("");
  }


  const handleCancel=()=>{
     setTFQuestionText("");
    setTFAnswer("");
  }
  return (
    <Card className="flex flex-col justify-center items-center mt-5 p-4">
     
      <div className="flex flex-col">
        <QuestionInput value={TFQuestionText} onChange={setTFQuestionText}/>
        <div className="flex justify-center">
          <RadioGroup
            row
            value={TFanswer}
            onChange={(e) => setTFAnswer(e.target.value)}
          >
            <FormControlLabel value="true" control={<Radio />} label="true" />
            <FormControlLabel value="false" control={<Radio />} label="false" />
          </RadioGroup>
        </div>
        <div className="flex justify-center gap-4">
         
          <SaveButton  onClick={handleSave}/>
          <CancelButton onClick={handleCancel} />
        </div>
      </div>
    </Card>
  );
}
export default TrueOrFalseTemplate;
