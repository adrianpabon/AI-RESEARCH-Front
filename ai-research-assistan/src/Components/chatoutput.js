import React from 'react';

const ChatOutput = ({ message }) => {
  return (
    <div className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`p-2 rounded-lg shadow-sm ${message.sender === 'bot' ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}>
        {message.text}
      </div>
    </div>
  );
};

export default ChatOutput;
