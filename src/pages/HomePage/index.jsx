import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Chatbox from '../../components/Chatbox';
import { Col, Row } from 'antd';
import './index.css';
import Calculator from '../../components/Calculator';

const HomePage = () => {
  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const connectionOptions =  {
      "force new connection" : true,
      "reconnectionAttempts": "Infinity",
      "timeout" : 10000,
      "transports" : ["websocket"]
    };
    
    const socket = io('localhost:3000', connectionOptions);
    socket.on('chat-return', res => {
      setMessages(res)
    })
    setSocket(socket)
  }, [])

  return (
    <Row>
      <Col span={12}><Chatbox messages={messages} /></Col>
      <Col span={12}><Calculator socket={socket} /></Col>
    </Row>
  );
}
 
export default HomePage;