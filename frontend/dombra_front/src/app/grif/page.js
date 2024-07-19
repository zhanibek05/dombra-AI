"use client"

import React, { useEffect, useState, useRef } from 'react';
import styles from './grif.module.css';
import * as Tone from 'tone';


const Fretboard = ({ data }) => {

  let length = 0;
  
  
  if(data){
    length = Object.entries(data).length;
  }
  
  
  
  const numberOfFrets = 20; // число ладов
  const fretMarkPositions = [2, 5, 7, 10, 12, 14]; // позиции маркеров на домбре
  const noteFlat = ["C", 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  const noteSharp = ["C", 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const orderedNotes = ["G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", "C6", "Db6", "D6"];
  const accidentals = 'flats';
  const dombyraTuning = [2, 7];

  const [playSpeed, setPlaySpeed] = useState(400);
  const [isPlaying, setIsPlaying] = useState(false);
  const [curTab, setCurTab] = useState(0)
  const curTabRef = useRef(curTab);
  
  const isPlayingRef = useRef(isPlaying); // создаем ref для отслеживания isPlaying

  const synth = new Tone.Synth().toDestination();

  

  const timer = ms => new Promise(res => setTimeout(res, ms));

  

  const showTabs = async (tabs) => {
    
    const entries = Object.entries(tabs)
    
    
    

    if (true) {
      for (let i = curTab; i < entries.length; i++) {
        
        if (!isPlayingRef.current){
          
          setCurTab(i);
          break;
        } ; 
        console.log(tabs[i][0])
        console.log(tabs[i][1])
        const note = orderedNotes[tabs[i][0]];
        const string = document.querySelector('[string_number="2"]');
        const fret = string.querySelector(`div[data-note="${note}"]`);
        fret.style.setProperty('--noteDotOpacity', 2);

        document.getElementById("progress").setAttribute("value", `${i + 1}`);

        

        synth.triggerAttackRelease(note, "8n");
        
        await timer(playSpeed*tabs[i][1]);
        
        fret.style.setProperty('--noteDotOpacity', 0);
        await timer(playSpeed*tabs[i][1]);
        if(i == tabs.length - 1){
          setCurTab(0);
          setIsPlaying(!isPlaying);
          break;
        }
      }
      
    }
  };

  useEffect(() => {
    isPlayingRef.current = isPlaying; // обновляем ref при изменении isPlaying
    curTabRef.current = curTab;
    
    if (isPlaying) {
      showTabs(data);
    }
  }, [isPlaying, data, curTab]);

  const generateNoteNames = (noteIndex, accidentals) => {
    noteIndex = noteIndex % 12;
    if (accidentals === 'flats') {
      return noteFlat[noteIndex];
    } else if (accidentals === 'sharps') {
      return noteSharp[noteIndex];
    }
  };

  const handleButtonClick = () => {
    setIsPlaying(prev => !prev);
  };

  const Playback = () => {
    setCurTab(0);
    document.getElementById("progress").setAttribute("value", "0");
  }

  useEffect(() => {
    const fretboard = document.querySelector(`.${styles.fretboard}`);
    let string1 = document.createElement('div');
    string1.classList.add(styles.string);
    string1.setAttribute('string_number', 1);
    fretboard.appendChild(string1);

    for (let fret = 0; fret <= numberOfFrets; fret++) {
      let noteFret = document.createElement("div");
      noteFret.classList.add(styles.noteFret);
      string1.appendChild(noteFret);

      let noteName = generateNoteNames((fret + dombyraTuning[0]), accidentals);
      noteFret.setAttribute('data-note', noteName);

      if (fretMarkPositions.includes(fret)) {
        noteFret.classList.add(styles.fretmark);
      }
    }

    let string2 = document.createElement('div');
    string2.classList.add(styles.string);
    string2.setAttribute("string_number", 2);
    fretboard.appendChild(string2);

    for (let fret = 0; fret <= numberOfFrets; fret++) {
      let noteFret = document.createElement("div");
      noteFret.classList.add(styles.noteFret);
      string2.appendChild(noteFret);

      let noteName = orderedNotes[fret];
      noteFret.setAttribute('data-note', noteName);
    }
  }, []);

  return (
    <div className='h-screen pt-20'>
      <div className={styles.fretboard}></div>
      <div className="flex flex-col items-center justify-center pt-12">
        <progress className='w-full h-2 rounded-full transition-w-0.5' id='progress' max={`${length}`} value={`0`} ></progress>
        <div className='flex items-center justify-center py-5'>
          <button
              variant="outline"
              size="icon"
              onClick={() => setIsPlaying((prev) => !prev)}
              className="w-10 h-10 rounded-full transition-colors hover:bg-gray-200 hover:text-muted-foreground"
            >
              {isPlaying ? <CircleStopIcon className="h-10 w-10" /> : <PlayIcon className="h-10 w-10" />}
              <span className="sr-only">{isPlaying ? "Stop" : "Play"}</span>
          </button>


          <button onClick={Playback}   className="rounded-full hover:bg-gray-200">
              <UndoIcon className="mx-5 fill-black h-10 w-10" />
          </button>

        
        </div>
        
        
      </div>
    </div>
  );
};

export default Fretboard;


function UndoIcon(props) {
  return (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//         <g id="Undo">
//           <path d="M19.939,13.67A7.958,7.958,0,0,1,7.8,19.74a8.061,8.061,0,0,1-3.77-6.77.5.5,0,0,1,1,0,6.976,6.976,0,0,0,11,5.7,6.969,6.969,0,0,0-1-11.97,10.075,10.075,0,0,0-4.64-.69V7.46a.5.5,0,0,1-.81.39L7.109,5.9a.5.5,0,0,1,0-.79L9.6,3.17a.5.5,0,0,1,.8.4V5.01c.71-.01,1.43-.03,2.13.02a7.985,7.985,0,0,1,7.41,8.64Z" style="fill: #1e1e23"/>
//         </g>
// </svg>
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fillOpacity="black"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path />
      <path d="M19.939,13.67A7.958,7.958,0,0,1,7.8,19.74a8.061,8.061,0,0,1-3.77-6.77.5.5,0,0,1,1,0,6.976,6.976,0,0,0,11,5.7,6.969,6.969,0,0,0-1-11.97,10.075,10.075,0,0,0-4.64-.69V7.46a.5.5,0,0,1-.81.39L7.109,5.9a.5.5,0,0,1,0-.79L9.6,3.17a.5.5,0,0,1,.8.4V5.01c.71-.01,1.43-.03,2.13.02a7.985,7.985,0,0,1,7.41,8.64Z" />
    </svg>
  )
}

function CircleStopIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <rect width="6" height="6" x="9" y="9" />
    </svg>
  )
}


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
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}

