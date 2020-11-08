import React, { useEffect } from 'react';
import Calculator from '../components/calculator/Calculator';
import io from 'socket.io-client';

const HomePage = () => {
  useEffect(() => {
    const connectionOptions =  {
      "force new connection" : true,
      "reconnectionAttempts": "Infinity",
      "timeout" : 10000,
      "transports" : ["websocket"]
    };
    
    const socket = io('localhost:3000', connectionOptions);
  }, [])

  return (
    <Calculator />
  );
}
 
export default HomePage;