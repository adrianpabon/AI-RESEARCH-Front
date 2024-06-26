import React, { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim().length > 0) { // Asegura que no se envíen mensajes vacíos
      onSend(input);
      setInput('');
    }
  };

  return ( 
    <div className="flex p-4">
      <input
  value={input}
  onChange={(e) => setInput(e.target.value)}
  type="text"
  placeholder="Ask..."
  aria-label="Enter your message"
  className="w-11/12 md:w-1/2 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
/>
<button
  onClick={handleSend}
  className="bg-blue-500 text-white p-2 ml-2"
  aria-label="Send your message"
>Send</button>

    </div>
  );
};

export default ChatInput;
