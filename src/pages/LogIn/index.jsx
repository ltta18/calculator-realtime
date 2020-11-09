import React, { useState } from "react";
import { Button } from "antd";
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
      <h1 className="room-name">Calculator Realtime</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={handleNameChange}
        className="text-input-field"
      />
      <Link to={`/homepage`} className="enter-button" onClick={handleClickEnterApp}>
        <Button>Join app</Button>
      </Link>
    </div>
  );
};

export default Login;