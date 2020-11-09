import React from "react";

import "./index.css";

const Chatbox = ({ messages }) => {
  return (
    <div className="chat-room-container">
      <h1 className="room-name">Calculator Realtime</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages?.map((message, i) => (
            <>
              <div>{localStorage.getItem('name')}</div>
              <li
                key={i}
                className={`message-item ${
                  message.ownedByCurrentUser ? "my-message" : "received-message"
                }`}
              >
                {message}
              </li>
            </>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Chatbox;