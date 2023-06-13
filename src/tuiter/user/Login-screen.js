import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginThunk({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/tuiter/profile");
      })
      .catch((error) => {
        alert("Unable to login: " + error.message);
      });
  };

  return (
    <>
      <h1>Login Screen</h1>
      <div className="mt-2">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter your username"
          aria-label="Username"
          style={{ width: "400px" }}
        />
      </div>
      <div className="mt-2">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
          aria-label="Password"
          style={{ width: "400px" }}
        />
      </div>
      <button
        className="btn btn-primary mt-2"
        onClick={handleLogin}
        aria-label="Login"
      >
        Login
      </button>
    </>
  );
};

export default LoginScreen;
