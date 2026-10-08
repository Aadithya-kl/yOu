import React, { useEffect, useRef } from 'react';
import { ViewPanel } from './ViewPanel';

interface CameraExperienceProps {
  stream: MediaStream;
}

export const CameraExperience: React.FC<CameraExperienceProps> = ({ stream }) => {
  const selfieRef = useRef<HTMLVideoElement>(null);
  const otherRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (selfieRef.current && stream) {
      selfieRef.current.srcObject = stream;
    }
    if (otherRef.current && stream) {
      otherRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="experience-container">
      <div className="panel-container left">
        <ViewPanel
          title="SELFIE VIEW"
          isMirrored={true}
          videoRef={selfieRef}
        />
      </div>
      <div className="divider" />
      <div className="panel-container right">
        <ViewPanel
          title="OTHER'S VIEW"
          isMirrored={false}
          videoRef={otherRef}
        />
      </div>
    </div>
  );
};
