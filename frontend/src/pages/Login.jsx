import React from "react";
import Navbar from "../component/Navbar";
import LoginCard from "../component/LoginCard";

export default function Login() {

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-b from-cyan-300 to-pink-400 flex items-center justify-center p-4">
       
      <LoginCard />
    </div>
    </>
  );
}
