import React, { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    onSend(input);
    setInput('');
  };

  return (
    <div className="flex p-4">
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        className="border p-2 flex-grow" 
      />
      <button onClick={handleSend} className="bg-blue-500 text-white p-2 ml-2">Send</button>
    </div>
  );
};

export default ChatInput;
