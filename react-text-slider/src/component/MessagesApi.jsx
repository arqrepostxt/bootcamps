import React, { useState, useEffect } from 'react';

const MessagesApi = () => {
  const [messages, setMessages] = useState([]);

  
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/quotes');
        const data = await response.json();
        setMessages(data);
        console.log(messages.values);
      } catch (error) {
        console.log('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [messages.length]);

  

  return (
    <div>
    {messages.length > 0 && <h1>{messages[currentMessageIndex].text}</h1>}
  </div>
  );
};

export default MessagesApi;
