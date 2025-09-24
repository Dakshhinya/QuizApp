import { useSelector } from "react-redux";
import { Card } from "@mui/material";

function QuestionList() {

  const { quizzes, activeQuizId } = useSelector((state) => state.questions);

  
  const activeQuiz = quizzes.find((q) => q.id === activeQuizId);

  
  if (!activeQuiz) {
    return (
      <Card className="mt-6 p-4 w-full">
        <h2 className="text-xl font-bold mb-4">No quiz selected</h2>
      </Card>
    );
  }


  if (!activeQuiz.questions.length) {
    return (
      <Card className="mt-6 p-4 w-full">
        <h2 className="text-xl font-bold mb-4">
          {activeQuiz.name} - No Questions Yet
        </h2>
      </Card>
    );
  }


  return (
    <Card className="mt-6 p-4 w-full">
      <h2 className="text-xl font-bold mb-4">
        {activeQuiz.name} - Saved Questions
      </h2>
      {activeQuiz.questions.map((q, index) => (
        <div key={index} className="mb-3 pb-2 border-b">
          <p className="font-semibold">
            {q.type.toUpperCase()}: {q.question}
          </p>

          {q.type === "choose" ? (
            <ul className="ml-4 list-disc">
              {q.options.map((opt, i) => (
                <li
                  key={i}
                  className={opt.isCorrect ? "font-bold text-green-600" : ""}
                >
                  {opt.text} {opt.isCorrect ? "(Correct)" : ""}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">Answer: {q.answer}</p>
          )}
        </div>
      ))}
    </Card>
  );
}

export default QuestionList;
