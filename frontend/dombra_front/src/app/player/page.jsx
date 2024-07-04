"use client"
// components/PlayerBar.js
import { useState, useEffect } from 'react';

const PlayerBar = ({ elements }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    elements = [1, 2, 3, 4]

    useEffect(() => {
        let interval = null;

        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    const newIndex = prevIndex < elements.length - 1 ? prevIndex + 1 : prevIndex;
                    setProgress((newIndex / (elements.length - 1)) * 100);
                    return newIndex;
                });
            }, 1000); // Update interval can be adjusted
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isPlaying, elements.length]);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handleStop = () => {
        setIsPlaying(false);
    };
    const handleBack = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex > 0 ? prevIndex - 1 : 0;
            setProgress((newIndex / (elements.length - 1)) * 100);
            return newIndex;
        });
    };

    return (
        <div>
            <div style={{ width: '100%', backgroundColor: '#e0e0df', height: '30px', borderRadius: '5px' }}>
                <div style={{ width: `${progress}%`, backgroundColor: '#3b5998', height: '100%', borderRadius: '5px' }}></div>
            </div>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleBack}>Back</button>
            <div>Current Index: {currentIndex}</div>
        </div>
    );
};

export default PlayerBar;
