"use client"

import Link from "next/link";
import { useState } from "react"
import Fretboard from "../grif/page";

export default function Upload() {

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [midiNumbers, setMidiNumbers] = useState([]);
  const [uploadStatus, setUploadStatus] = useState(false);
  const [showFretboard, setShowFretboard] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);


    try {
      const res = await fetch('http://localhost:8000/api/upload/', {
        method: 'POST',
        body: formData,
      });

      if(!res.ok){
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setMidiNumbers(data.midi_data);
      console.log(data.midi_data)
      setMessage('File Uploaded successfully!');
      setUploadStatus(true);
      
      
    } catch (error) {
      console.error('Error uploading file:', error)
      
    }
  };

    return(

      <div>
        {!uploadStatus && 
          <div  className=" flex flex-col items-center h-screen bg-background">
          <div className="max-w-md w-full space-y-4 px-4 mt-20">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight">Upload Music</h1>
              
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-md border">
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                accept="audio/*"
                className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              <button type="submit" className="rounded-full w-full text-white bg-gray-800 hover:bg-gray-700">
                Show Tabs
              </button>
              {message && <p>{message}</p>}
            </form>
            <div>
              {
                uploadStatus && <Fretboard className="max-width-100000" ></Fretboard>
              }
            </div>
          </div>
        </div>

        }

        {
          uploadStatus && <Fretboard data={midiNumbers} ></Fretboard>
        }
        
            
      </div>

      
      
        
    )
}