import { useState } from "react";
import { Button } from "@mui/material";
import ChooseTemplate from "../component/templateModule/ChooseTemplate";
import OnemarkTemplate from "../component/templateModule/OnemarkTemplate";
import ParaTemplate from "../component/templateModule/ParaTemplate";
import TrueOrFalseTemplate from "../component/templateModule/TrueOrFalseTemplate";
import QuestionList from "../component/QuestionList";

function AddQuestions() {
  const [activeTemplate, setActiveTemplate] = useState(null);

  const renderTemplate = () => {
    switch (activeTemplate) {
      case "para":
        return <ParaTemplate />;
      case "oneMark":
        return <OnemarkTemplate />;
      case "choose":
        return <ChooseTemplate />;
      case "trueFalse":
        return <TrueOrFalseTemplate />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center mt-6">
    
      <div className="flex gap-5  mb-6">
        <Button variant="contained" color="secondary" onClick={() => setActiveTemplate("para")}>
          Paragraph
        </Button>
        <Button variant="contained"  color="secondary" onClick={() => setActiveTemplate("oneMark")}>
          One Mark
        </Button>
        <Button variant="contained"  color="secondary" onClick={() => setActiveTemplate("choose")}>
          Choose (MCQ)
        </Button>
        <Button variant="contained"  color="secondary"  onClick={() => setActiveTemplate("trueFalse")}>
          True / False
        </Button>
      </div>

     
      <div className="w-full flex justify-center">
        {renderTemplate()}
      </div>
      <QuestionList/>
    </div>
  );
}

export default AddQuestions;
