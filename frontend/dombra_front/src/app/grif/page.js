"use client"

import React, { useEffect, useState, useRef } from 'react';
import styles from './grif.module.css';
import * as Tone from 'tone';


const Fretboard = ({ data }) => {
  data = [1, 2, 3, 4, 5, 6, 7];
  const numberOfFrets = 20; // число ладов
  const fretMarkPositions = [2, 5, 7, 10, 12, 14]; // позиции маркеров на домбре
  const noteFlat = ["C", 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  const noteSharp = ["C", 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const orderedNotes = ["G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", "C6", "Db6", "D6"];
  const accidentals = 'flats';
  const dombyraTuning = [2, 7];

  const [isPlaying, setIsPlaying] = useState(false);
  const [curTab, setCurTab] = useState(0)
  const curTabRef = useRef(curTab);
  
  const isPlayingRef = useRef(isPlaying); // создаем ref для отслеживания isPlaying

  const synth = new Tone.Synth().toDestination();

  

  const timer = ms => new Promise(res => setTimeout(res, ms));

  

  const showTabs = async (tabs) => {
    if (tabs) {
      for (let i = curTab; i < tabs.length; i++) {
        console.log("i:",i, "tab:", tabs[i]);
        if (!isPlayingRef.current){
          console.log("i:", i, "Cur:", curTab);
          setCurTab(i);
          break;
        } ; // Выход из цикла, если isPlaying становится false
        const note = orderedNotes[tabs[i]];
        const string = document.querySelector('[string_number="2"]');
        const fret = string.querySelector(`div[data-note="${note}"]`);
        fret.style.setProperty('--noteDotOpacity', 2);

        document.getElementById("progress").setAttribute("value", `${i + 1}`);


        synth.triggerAttackRelease(note, "8n");

        await timer(500);
        
        fret.style.setProperty('--noteDotOpacity', 0);
        await timer(500);
        if(i == tabs.length - 1){
          setCurTab(0);
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
        <progress className='w-full h-2 rounded-full transition-w-0.5' id='progress' max={`${data.length}`} value={`0`} ></progress>
        <div className='flex items-center justify-center'>
        <button
          onClick={handleButtonClick}
          className={`p-4 rounded-full text-white focus:outline-none transition-all duration-300 ${isPlaying ? 'bg-red-500' : 'bg-green-500'}`}
        >
          {isPlaying ? 'Stop' : 'Play'}
        </button>
        <button onClick={Playback} className='border'>
          Playback
        </button>
        </div>
        
        
      </div>
    </div>
  );
};

export default Fretboard;
