import React, { useState } from 'react';
import { Button } from '@radix-ui/react-button';
import { Input } from '@radix-ui/react-input';
import { useChat } from '../utils/ai';
import { wrangleData } from '../utils/dataWrangler';

const UploadData = () => {
  const [file, setFile] = useState(null);
  const { sendMessage } = useChat();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const data = await wrangleData(file);
    sendMessage({ type: 'data', content: data });
  };

  return (
    <div id="uploadData" className="uploadData">
      <Input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default UploadData;