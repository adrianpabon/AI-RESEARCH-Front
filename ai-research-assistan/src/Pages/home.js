// src/Pages/home.js
import React, { useState } from 'react';
import ChatOutput from '../Components/chatoutput';

const Home = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    try {
      const response = await fetch('http://localhost:5001/api/get_response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      if (data.response) {
        const botMessage = { text: data.response, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } else {
        const errorMessage = { text: 'Error fetching response', sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      const errorMessage = { text: 'Error fetching response', sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }

    setInput('');
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Research Assistant</h1>
      <div className="w-full flex justify-center mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search..."
          className="w-11/12 md:w-1/2 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white p-2 ml-2">Send</button>
      </div>
      <div className="w-full md:w-1/2">
        {messages.map((msg, index) => (
          <ChatOutput key={index} message={msg} />
        ))}
      </div>
    </div>
  );
};

export default Home;
