import React, { useState } from 'react';
import { Button, Input } from '@radix-ui/react-primitives';
import { useChat } from '../utils/ai';

function ChatInput() {
  const [message, setMessage] = useState('');
  const { sendMessage } = useChat();

  const handleSend = () => {
    if (message.trim() !== '') {
      sendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatInput">
      <Input
        className="inputField"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
      />
      <Button className="sendButton" onClick={handleSend}>
        Send
      </Button>
    </div>
  );
}

export default ChatInput;