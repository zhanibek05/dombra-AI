"use client"

import { useState } from "react"

export default function Upload() {

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('http://localhost:8000/api/upload/', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setMessage(data.message);
  };

    return(
        <div  >
            <h1>Upload MP3</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} accept="audio/mpeg" />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}