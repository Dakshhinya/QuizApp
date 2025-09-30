// import { useState } from "react";     // 👈 Added useEffect for future API fetch
import { useNavigate } from "react-router-dom"; 
function QuizList() {
  // For now keep dummy data
  const navigate = useNavigate();
  const quizzes=[
    {
      id: "quiz1",
      title: "Mathematics Basics",
      questionCount: 10,
      timeAllotted: 15,
      attended: false,
      score: 0,
      totalMarks: 10,
    },
    {
      id: "quiz2",
      title: "General Science",
      questionCount: 12,
      timeAllotted: 20,
      attended: true,
      score: 8,
      totalMarks: 12,
    },
  ];

  // useEffect(() => {
  //   const fetchQuizzes = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const res = await axios.get("http://localhost:3000/api/auth/quiz/list", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       setQuizzes(res.data);
  //     } catch (err) {
  //       console.error("Error fetching quizzes:", err);
  //     }
  //   };
  //   fetchQuizzes();
  // }, []); 

   const handleQuizClick = (quizId) => {
    navigate(`/quiz/${quizId}`); 
  };

  return (
    <div className="w-full mt-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Quiz List
        </h2>

        {quizzes.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No quizzes created yet.
          </div>
        ) : (
          <div className="space-y-4">
            {quizzes.map((quiz, index) => (
              <div
                key={quiz.id} // 👈 Make sure `id` exists (backend must return it)
                className="bg-white rounded-lg shadow-md border-l-4 border-purple-500 p-5 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-purple-100 text-purple-800 font-bold px-3 py-1 rounded-full text-sm">
                        #{index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-purple-600" onClick={()=> handleQuizClick(quiz.id)}>
                        {quiz.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">📝 Questions:</span>
                        <span className="font-semibold text-blue-600">
                          {quiz.questionCount}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">⏱️ Time:</span>
                        <span className="font-semibold text-green-600">
                          {quiz.timeAllotted} mins
                        </span>
                      </div>

                      {quiz.attended && (
                        <>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">🎯 Score:</span>
                            <span className="font-semibold text-yellow-600">
                              {quiz.score}/{quiz.totalMarks}
                            </span>
                          </div>
                          <span className="inline-flex items-center bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                            ✓ Completed
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="ml-4">
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      {quiz.attended ? "View" : "Start"} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizList;
