// src/Pages/home.js
import React, { useState } from 'react';
import ChatOutput from '../Components/chatoutput';
import Layout from '../Components/Layout';

const Home = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    try {
      const response = await fetch('https://research-assistant.ddns.net/api/get_response', {
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
    <Layout>
  <div className="flex flex-col items-center p-4 min-h-screen bg-white"> {/* Cambiado de bg-gray-100 a bg-white */}
    <div className="w-full flex justify-center mb-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search..."
        className="w-full md:w-3/4 lg:w-4/5 xl:w-4/5 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button onClick={handleSend} className="bg-blue-500 text-white p-2 ml-2">Send</button>
    </div>
    <div className="w-full md:w-1/2">
      {messages.map((msg, index) => (
        <ChatOutput key={index} message={msg} />
      ))}
    </div>
  </div>
</Layout>

  );
};

export default Home;
