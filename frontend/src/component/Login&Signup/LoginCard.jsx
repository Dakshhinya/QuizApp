
import { useState } from "react";
import LoginButton from "./LoginButton"
import { Link, useNavigate} from "react-router-dom";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = [
    { email: "student@example.com", password: "student123", role: "student" },
    { email: "teacher@example.com", password: "teacher123", role: "teacher" },
  ];


   const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
     
      localStorage.setItem("role", user.role);

      if (user.role === "student") {
        navigate("/student-dashboard");
      } else if (user.role === "teacher") {
        navigate("/teacher-dashboard");
      }
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
    <div className="w-full max-w-md">
       <form
        onSubmit={handleLogin}
        className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
      >
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 border-y-yellow-400 rounded-2xl mb-4">
            <span className="text-2xl font-bold text-black">QuizUp</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Login in to your QuizUp account</p>
        </div>
        <div className="space-y-6 flex flex-col">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2">Email</label>
            <input className="px-4 py-3 border border-gray-300 rounded-lg  w-full focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors" 
            type="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            required />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2">Password</label>
            <input className="px-4 py-3 border border-gray-300 rounded-lg  w-full focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors" 
            type="password" 
            name="password" 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)} 
            placeholder="Enter your password" 
            required />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}


          <LoginButton/>
          
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-black font-bold hover:underline">
              Sign Up
            </Link>
          </p>

        </div>
      </div>
      </form>
    </div>
    
    </>
  );
}
