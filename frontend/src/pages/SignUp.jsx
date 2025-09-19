import React from "react";
// import SideImage from "../components/SideImage";
import SignUpCard from "../component/SignUpCard"; 

export default function SignUp() {


  const onSignUp = (signupData) => {
    console.log("SignUp data:", signupData);

  };

  return (
    <div className="auth-page flex">
      {/* <SideImage src="/auth-side.png" /> */}
      <SignUpCard onSignUp={onSignUp} /> 
    </div>
  );
}
