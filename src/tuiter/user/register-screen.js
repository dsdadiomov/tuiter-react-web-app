import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUserThunk } from "../services/auth-thunks";

function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (event) => {
    event.preventDefault(); 
    try {
      await dispatch(registerUserThunk({ username, password })).unwrap();
      navigate("/tuiter/profile");
    } catch (error) {
      let errorMessage = "Unable to register user.";
      if (error.message) {
        errorMessage = error.message;
      }
      alert(errorMessage);
    }
  };

  return (
    <>
      <h1>Register Screen</h1>
      <form onSubmit={handleRegister}>
        <div className="mt-2">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your username"
            required
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
            required
            style={{ width: "400px" }}
          />
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Register
        </button>
      </form>
    </>
  );
}

export default RegisterScreen;
