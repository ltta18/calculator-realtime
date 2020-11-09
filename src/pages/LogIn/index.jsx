import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Login = () => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleClickEnterApp = () => {
    localStorage.setItem('name', name)
  }

  return (
    <div className="login-container">
      <input
        type="text"
        placeholder="name"
        onChange={handleNameChange}
        className="text-input-field"
      />
      <Link to={`/homepage`} className="enter-button" onClick={handleClickEnterApp}>
        Join app
      </Link>
    </div>
  );
};

export default Login;