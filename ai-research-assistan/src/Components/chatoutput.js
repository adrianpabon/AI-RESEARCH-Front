import React from 'react';

const ChatOutput = ({ message }) => (
  <div className={`p-2 my-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
    <p className="text-sm">{message.text}</p>
  </div>
);

export default ChatOutput;
