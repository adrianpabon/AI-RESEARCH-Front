import React from 'react';

const ChatOutput = ({ messages }) => {
  return (
    <div className="p-4">
      {messages.map((msg, index) => (
        <div key={index} className="border-b p-2">
          {msg}
        </div>
      ))}
    </div>
  );
};

export default ChatOutput;
