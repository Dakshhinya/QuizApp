import { Card ,TextField} from "@mui/material";
import QuestionInput from "./commonComponents/QuestionInput";
import SaveButton from "./commonComponents/SaveButton";
import CancelButton from "./commonComponents/CancelButton";
import { useState } from "react";

function OnemarkTemplate() {
  const [answer, setAnswer] = useState(null);
  return (
    <Card className="flex flex-col justify-center items-center mt-5 p-4">
      <div className="flex flex-col">
        <QuestionInput />
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
          <SaveButton />
          <CancelButton />
        </div>
      </div>
    </Card>
  );
}
export default OnemarkTemplate;
