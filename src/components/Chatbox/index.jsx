import React from "react";
import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";

import "./index.css";

const Chatbox = ({ messages }) => {
  const logout = () => {
    localStorage.removeItem('name');
  }

  return (
    <div className="chat-room-container">
      <Row>
        <Col span={8}>
          <Link to="/">
            <Button onClick={ logout }>Logout</Button>
          </Link>
        </Col>
        <Col span={8}><h1 className="room-name">Calculator Realtime</h1></Col>
        <Col span={8}></Col>
      </Row>
      <div className="messages-container">
        <ol className="messages-list">
          {messages?.map((message, i) => (
            <>
              <div className="user-name">
                {message[0] ? message[0] : 'Anonymous'}:
              </div>
              <li
                key={i}
                className='message-item received-message'
              >
                {message[1]}
              </li>
            </>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Chatbox;