import React, { useState } from "react";

const PasswordProtected = ({ children }) => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/.netlify/functions/auth", {
      method: "POST",
      body: JSON.stringify({ password }),
    });
    const data = await res.json();

    if (res.status === 200) {
      setAuthenticated(true);
    } else {
      setError(data.message);
    }
  };

  if (authenticated) {
    return children;
  }

  return (
    <div>
      <h2>Enter Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default PasswordProtected;
