import { FormControlLabel, RadioGroup, Radio, Card } from "@mui/material";
import QuestionInput from "./commonComponents/QuestionInput";
import SaveButton from "./commonComponents/SaveButton";
import CancelButton from "./commonComponents/CancelButton";
import { useState } from "react";

function TrueOrFalseTemplate() {
  const [answer, setAnswer] = useState(null);
  return (
    <Card className="flex flex-col justify-center items-center mt-5 p-4">
     
      <div className="flex flex-col">
        <QuestionInput />
        <div className="flex justify-center">
          <RadioGroup
            row
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          >
            <FormControlLabel value="true" control={<Radio />} label="true" />
            <FormControlLabel value="false" control={<Radio />} label="false" />
          </RadioGroup>
        </div>
        <div className="flex justify-center gap-4">
         
          <SaveButton />
          <CancelButton />
        </div>
      </div>
    </Card>
  );
}
export default TrueOrFalseTemplate;
