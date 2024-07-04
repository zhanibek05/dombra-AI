"use client"

import React, { useEffect, useState, useRef } from 'react';
import styles from './grif.module.css';
import * as Tone  from 'tone'



const Fretboard = ({data}) => {
  
  
  const numberOfFrets = 20; // число ладов
  const fretMarkPositions = [2, 5, 7, 10, 12, 14]; // positions of marks in dombyra
  const noteFlat = ["C", 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  const noteSharp = ["C", 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const orderedNotes = ["G", "Ab", "A", "Bb", "B", "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2", "C3", "Db3", "D3"]
  const accidentals = 'flats';
  const dombyraTuning = [2, 7];
 
  const [isPlaying, setIsplaying] = useState(false);

  // timer for delay
  const timer = ms => new Promise(res => setTimeout(res, ms))
  let cur = 0;

  //For show tabs in fretboaed
  async function showTabs (tabs) { 
    
    for (let i = 0; i < tabs.length; i++) {
      if(isPlaying){
        const note = orderedNotes[data[i]];
        const string = document.querySelector('[string_number = "2"]')
        const fret = string.querySelector(`div[data-note = ${note}]`);
        fret.style.setProperty('--noteDotOpacity', 2)

        
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("G", "8n");
        

        await timer(1000); // then the created Promise can be awaited
        fret.style.setProperty('--noteDotOpacity', 0)
        await timer(1000);
      }
      
    }
  }
  if(isPlaying){
    showTabs(data);
  }

  const generateNoteNames = (noteIndex, accidentals) => {
    noteIndex = noteIndex % 12;
    if (accidentals === 'flats') {
      return noteFlat[noteIndex];
    } else if (accidentals === 'sharps') {
      return noteSharp[noteIndex];
    }
  };


  const handleButtonClick = () => {
    setIsplaying(!isPlaying)
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

      if (fretMarkPositions.indexOf(fret) !== -1) {
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
    

    fretboard.addEventListener('mouseover', (event) => {
      if (event.target.classList.contains(styles.noteFret)) {
        event.target.style.setProperty('--noteDotOpacity', 1);
      }
    });

    fretboard.addEventListener('mouseout', (event) => {
      event.target.style.setProperty('--noteDotOpacity', 0);
    });

    // fretboard.addEventListener('click', (event) => {
    //   if (event.target.classList.contains(styles.noteFret)) {
    //     const now = Tone.now();
    //     const synth = new Tone.Synth().toDestination();
    //     synth.triggerAttack("G", "16n");
    //     // wait one second before triggering the release
    //     synth.triggerRelease(now + 0.5);
    //   }
    // })

  }, []);

  

  return (
      <div className='h-screen pt-20'>
        <div className={styles.fretboard}> </div>

        <div className="flex items-center justify-center pt-12">
          <button
            onClick={handleButtonClick}
            className={`p-4 rounded-full text-white focus:outline-none transition-all duration-300 ${
            isPlaying ? 'bg-red-500' : 'bg-green-500'}`}
          >
            {isPlaying ? 'Stop' : 'Play'}
        </button>

        </div>
      
      </div>
      
);
};

export default Fretboard;
