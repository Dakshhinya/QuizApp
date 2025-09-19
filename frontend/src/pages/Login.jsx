import React from "react";
import SideImage from "../component/SideImage";
import LoginCard from "../component/Login&Signup/LoginCard";

export default function Login() {

  // define onLogin here
  const onLogin = (loginData) => {
    console.log("Login data:", loginData);
    if (loginData.role === "admin") {
      console.log("Redirect to Admin Dashboard");
    } else {
      console.log("Redirect to User Dashboard");
    }
  };

  return (
    <div className="auth-page flex">
      <SideImage src="/auth-side.png" />
      <LoginCard onLogin={onLogin} />
    </div>
  );
}
