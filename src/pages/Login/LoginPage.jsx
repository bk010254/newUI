import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css'; 

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username) {
      localStorage.setItem("username", username); 
      navigate("/home"); 
    }
  };

  return (
    <div className="page-container">
      <header>
        <h1>APPX TECH</h1>
      </header>
      <div className="login-container">
        <div className="login-box">
          <h2>Log In</h2>
          <p>Enter your username to access your account</p>
          <div className="input-container">
            <label>USERNAME</label>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Log into Account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
