// import CreateQuizButton from "../component/CreateQuizButton";
// import QuizName from "../component/QuizName";
import AddQuestions from "./AddQuestions";

function TeacherDashboard(){

    return (
        <div className="flex flex-col min-h-screen">
            {/* <div><Navbar title="QuizApp" subtitle="padida parama"/></div> */}
            <div className="flex-grow"><AddQuestions/></div>
            {/* <div> <Footer/></div> */}
        </div>
    )

}

export default TeacherDashboard;