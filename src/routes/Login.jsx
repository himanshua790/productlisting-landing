import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctPassword = "fedev2024test"; // Replace with your desired password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      localStorage.setItem("authenticated", "true");
      navigate("/"); // Redirect to the protected home route
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          style={{ width: "100%", padding: "8px", margin: "10px 0" }}
        />
        <button type="submit" style={{ width: "100%", padding: "8px" }}>
          Submit
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
