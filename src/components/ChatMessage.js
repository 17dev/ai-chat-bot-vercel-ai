import React from 'react';
import { Box } from 'radix-ds';

const ChatMessage = ({ message }) => {
  return (
    <Box
      padding_2
      bc="blue"
      bw_1
      br_2
      mt_2
      style={{ alignSelf: 'flex-end', maxWidth: '80%' }}
    >
      <p className="text-white">{message}</p>
    </Box>
  );
};

export default ChatMessage;