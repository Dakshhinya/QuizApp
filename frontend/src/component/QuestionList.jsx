import { useSelector } from "react-redux";
import { Card } from "@mui/material";

function QuestionList() {
  const questions = useSelector((state) => state.questions);

  if (!questions.length) {
    return null;
  }

  return (
    <Card className="mt-6 p-4 w-full">
      <h2 className="text-xl font-bold mb-4">Saved Questions</h2>
      {questions.map((q, index) => (
        <div key={index} className="mb-3 pb-2 border-b">
          <p className="font-semibold">
            {q.type.toUpperCase()}: {q.question}
          </p>
          <p className="text-gray-700">Answer: {q.answer}</p>
        </div>
      ))}
    </Card>
  );
}

export default QuestionList;
