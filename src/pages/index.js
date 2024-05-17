import React, { Suspense } from 'react';
import { ServerComponent } from 'react-dom/server';
import Chat from '../components/Chat';
import UploadData from '../components/UploadData';
import DataVisualization from '../components/DataVisualization';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">LLM Data Analyst Chatbot</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Suspense fallback={<div>Loading...</div>}>
            <ServerComponent location="/components/Chat" />
          </Suspense>
        </div>
        <div className="col-span-1">
          <Suspense fallback={<div>Loading...</div>}>
            <ServerComponent location="/components/UploadData" />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <ServerComponent location="/components/DataVisualization" />
          </Suspense>
        </div>
      </div>
    </div>
  );
}