import { useState } from "react";
import LoginButton from "./LoginButton"

export default function LoginCard({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <>
    <div className="w-full h-screen flex items-center border-2 gap-10">
      <div className="px-40 py-60 w- flex flex-col gap-10 border-2 ml-25">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="flex gap-10"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input className="flex gap-10"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <LoginButton/>
      </form>
    </div>
    </div>

    </>
  );
}
