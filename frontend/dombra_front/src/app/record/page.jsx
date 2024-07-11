"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import Fretboard from "../grif/page";
// import Mp3MediaRecorder from 'media-recorder-mp3';

export default function Main() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [isShowTabs, setIsShowTabs] = useState(false);
  const [tabs, setTabs] = useState([])


  function PlayIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        
      >
        <polygon points={isRecording ? "3 3 3 20 22 20 22 3" : "6 3 20 12 6 21 6 3"} />
      </svg>
    );
  }

  const handleButtonClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording(!isRecording);
  };

  const showTabs = () => {
    setIsShowTabs(!isShowTabs);
  }

  

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorderRef.current = new MediaRecorder(stream);

        mediaRecorderRef.current.ondataavailable = event => {
          audioChunksRef.current.push(event.data);
        };

        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(audioChunksRef.current, { type: 'mp3' });
          audioChunksRef.current = [];
          const audioURL = window.URL.createObjectURL(blob);
          setAudioURL(audioURL);
          sendAudioFileToServer(blob);
        };

        mediaRecorderRef.current.start();
      })
      .catch(err => {
        console.error('Error accessing microphone:', err);
      });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    
  };

  const sendAudioFileToServer = async (blob) => {
    const formData = new FormData();
    formData.append('file', blob, 'recording.mp3');

    try {
        const response = await fetch('http://localhost:8000/api/upload/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Audio file uploaded successfully');
        const data = await response.json();
        setTabs(data.midi_data)
      } else {
        console.error('Failed to upload audio file');
      }
    } catch (error) {
      console.error('Error uploading audio file:', error);
    }
  };

  return (

    
    <div>

      {!isShowTabs &&
        <div className="flex flex-col items-center justify-between min-h-screen p-4 bg-gray-220">
        <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="mb-8 text-2xl font-bold text-center">Play any melody on dombyra</h1>
        <button
          onClick={handleButtonClick}
          className=" relative flex items-center justify-center w-64 h-64 border-4 border-gray-900 rounded-full hover:scale-110 transition-transform duration-300"
        >
          <div className="absolute flex items-center justify-center w-48 h-48 border-4 border-gray-800 rounded-full animate-pulse">
            <PlayIcon className={`w-16 h-16 text-red-600`} />
          </div>
        </button>
        <p className="mt-4 text-red-500 animate-bounce">Record</p>
        
        {audioURL && (
          <div className="flex flex-col items-center justify-between">
              <audio src={audioURL} controls className="mt-4 rounded-md bg-gray-220" />
              <button 
              type="button" 
              className="m-5 text-white bg-gradient-to-r from-blue-500 
                     via-blue-600 to-blue-700 hover:bg-gradient-to-br 
                     focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                     font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={showTabs}
                     >
              Tabs
              </button>
          </div>

        )
        
        }
      </main>
      </div>
      }


      {
        isShowTabs && <Fretboard data={tabs}></Fretboard>
      }
      
      </div>
  );
}
