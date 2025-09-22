 import CreateQuizButton from "../component/CreateQuizButton";
 import QuizName from "../component/QuizName";
import AddQuestions from "./AddQuestions";

function TeacherDashboard(){

    return (
        <div className="flex flex-col min-h-screen">
            
            <div className="flex flex-col flex-grow"><CreateQuizButton/></div>
         
        </div>
    )

}

export default TeacherDashboard;