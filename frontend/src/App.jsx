import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Navigate } from "react-router-dom";
import TeacherDashboard from './pages/TeacherDashboard';
import AddQuestions from './pages/AddQuestions';


function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> */}
        <Route path='/' element={<TeacherDashboard/>}/>
        <Route path="/add-questions" element={<AddQuestions/>  }/>
        
      </Routes>

    </BrowserRouter>

    </>  
  )
}

export default App
