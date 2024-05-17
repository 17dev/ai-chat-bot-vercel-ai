import React from 'react';
import { Box } from 'radix-ds';

const ChatResponse = ({ message }) => {
  return (
    <Box
      padding="2"
      margin="2"
      bg="gray100"
      color="gray900"
      borderRadius="3"
      className="chatResponse"
    >
      {message}
    </Box>
  );
};

export default ChatResponse;