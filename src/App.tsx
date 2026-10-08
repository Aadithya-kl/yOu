import React, { useState, useEffect } from 'react';
import { Maximize, Minimize } from 'lucide-react';
import { CameraPermission } from './components/CameraPermission';
import { CameraExperience } from './components/CameraExperience';
import './index.css';

function App() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const requestCamera = async () => {
    try {
      setError(null);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: false,
      });
      setStream(mediaStream);
    } catch (err) {
      console.error('Error accessing camera:', err);
      setError('Camera access denied or not available.');
    }
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
      } catch (err) {
        console.error('Error attempting to enable full-screen mode:', err);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="app-root">
      {!stream ? (
        <CameraPermission onRequestPermission={requestCamera} error={error} />
      ) : (
        <>
          <CameraExperience stream={stream} />
          <button className="fullscreen-btn" onClick={toggleFullscreen} aria-label="Toggle Fullscreen">
            {isFullscreen ? <Minimize size={24} color="#fff" /> : <Maximize size={24} color="#fff" />}
          </button>
        </>
      )}
    </div>
  );
}

export default App;
