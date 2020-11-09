import React, { useEffect, useState } from 'react';
import Calculator from '../../components/Calculator';
import io from 'socket.io-client';
import Chatbox from '../../components/Chatbox';
import {
  Col,
  Row
} from 'antd';

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
    
    const socket = io('https://fast-wave-12645.herokuapp.com/', connectionOptions);
    socket.on('chat-return', res => {
      setMessages(res)
    })
    setSocket(socket)
  }, [])

  return (
    <Row align="center" justify="center" style={{ height: '100%' }} gutter={[16, 0]}>
      <Col xs={24} md={12} style={{ maxHeight: '100%' }}>
        <Chatbox messages={messages} socket={socket} />
      </Col>
      <Col xs={24} md={12}>
        <Calculator socket={socket} />
      </Col>
    </Row>
  );
}
 
export default HomePage;