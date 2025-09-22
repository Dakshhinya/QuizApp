import CreateQuizButton from "../component/CreateQuizButton";
import Footer from "../component/footer";
import Navbar from "../component/Navbar";


function TeacherDashboard(){

    return (
        <div className="flex flex-col min-h-screen">
            <div><Navbar title="QuizApp" subtitle="padida parama"/></div>
            <div className="flex-grow"><CreateQuizButton/></div>
            <div> <Footer/></div>
        </div>
    )

}

export default TeacherDashboard;