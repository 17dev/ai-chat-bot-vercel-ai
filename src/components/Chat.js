import React, { Suspense } from 'react';
import { ServerComponent } from 'react-dom/server';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import ChatResponse from './ChatResponse';
import UploadData from './UploadData';
import DataVisualization from './DataVisualization';

const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>LLM Data Analyst</h1>
      </div>
      <div className="chat-body">
        <ServerComponent location="/api/chat">
          <Suspense fallback={<div>Loading...</div>}>
            <ChatMessage />
            <ChatResponse />
          </Suspense>
        </ServerComponent>
      </div>
      <div className="chat-footer">
        <ChatInput />
      </div>
      <div className="data-upload">
        <UploadData />
      </div>
      <div className="data-visualization">
        <DataVisualization />
      </div>
    </div>
  );
};

export default Chat;