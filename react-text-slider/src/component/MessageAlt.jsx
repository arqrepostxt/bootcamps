import React, { useState } from 'react';
import { useEffect } from 'react';

const MessageComponent = () => {

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);


  const [messages, setMessages] = useState([
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
    'Message 5',
    'Message 6',
    'Message 7',
    'Message 8',
    'Message 9',
    'Message 10',
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleAddMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };


  useEffect(() => {
    if (messages.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [messages]);

  

  return (
    <div>
        <div>
        {messages.length > 0 && <h1>{messages[currentMessageIndex]}</h1>}
        </div>
      {/* <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul> */}
      <input
        type="text"
        value={newMessage}
        onChange={handleInputChange}
        placeholder="Enter a message"
      />
      <button onClick={handleAddMessage}>Add Message</button>
    </div>
  );
};

export default MessageComponent;
