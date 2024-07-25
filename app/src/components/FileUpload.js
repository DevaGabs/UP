import { useState } from 'react';

export default function FileUpload({ onFileUploaded }) {
  const [fileContent, setFileContent] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
        onFileUploaded(e.target.result);
      };
      reader.readAsText(file);
    } else {
      alert('Please upload a valid .txt file');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl mb-4">Upload Contacts</h1>
      <input
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        className="mb-4"
      />
      <textarea
        value={fileContent}
        readOnly
        rows="10"
        cols="50"
        className="border border-gray-300 p-2"
      />
    </div>
  );
}
