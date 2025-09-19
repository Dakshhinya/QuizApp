import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Navigate } from "react-router-dom";
import TeacherDashboard from './pages/TeacherDashboard';


function App() {


  return (
    <>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </BrowserRouter> */}
<TeacherDashboard/>
    </>  
  )
}

export default App
