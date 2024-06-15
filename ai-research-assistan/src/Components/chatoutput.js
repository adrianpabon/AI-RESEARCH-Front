import React from 'react';

const ChatOutput = ({ message }) => {
  return (
    <div className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`w-auto min-w-[100px] max-w-lg ${message.sender === 'bot' ? 'bg-white' : 'bg-blue-500 text-white'} rounded-lg p-2 shadow-lg`}>
        {message.text}
      </div>
    </div>
  );
};

export default ChatOutput;
