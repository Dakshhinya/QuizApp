
import LoginButton from "./LoginButton"
import { Link } from "react-router-dom";

export default function LoginCard() {
  return (
    <>
    <div className="w-full max-w-md">
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
            <input className="px-4 py-3 border border-gray-300 rounded-lg  w-full ocus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors" type="email" name="email" /*value={} onChange={}*/ placeholder="Enter your email" required />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2">Password</label>
            <input className="px-4 py-3 border border-gray-300 rounded-lg  w-full ocus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors" type="email" name="email" /*value={} onChange={}*/ placeholder="Enter your password" required />
          </div>

          <LoginButton/>
          
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-black font-bold hover:underline">
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </div>
    
    </>
  );
}
