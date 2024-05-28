import React, { useState } from 'react';
import ChatInput from '../Components/chatinput';
import ChatOutput from '../Components/chatoutput';

const Home = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);

    // Aquí deberías hacer una llamada a la API del LLM
    const fetchResponse = async () => {
      const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`
        },
        body: JSON.stringify({
          prompt: message,
          max_tokens: 150,
        })
      });

      const data = await response.json();
      setMessages(prevMessages => [
        ...prevMessages,
        { text: data.choices[0].text, sender: 'bot' }
      ]);
    };

    fetchResponse();
  };

  return (
    <div>
      <ChatOutput messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default Home;
