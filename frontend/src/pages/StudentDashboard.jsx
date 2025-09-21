// import Footer from "../component/footer";
import Navbar from "../component/Navbar";

function StudentDashboard(){

    return (
        <div className="flex flex-col min-h-screen">
            {/* <div><Navbar title="QuizApp" subtitle="padida parama"/></div> */}
            <Navbar/>
            <div className="flex-grow"></div>
            {/* <div> <Footer/></div> */}
        </div>
    )

}

export default StudentDashboard;