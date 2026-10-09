import React, { type RefObject } from 'react';

interface ViewPanelProps {
  title: string;
  isMirrored: boolean;
  videoRef: RefObject<HTMLVideoElement | null>;
}

export const ViewPanel: React.FC<ViewPanelProps> = ({ title, isMirrored, videoRef }) => {
  return (
    <div className="view-panel">
      <div className="panel-labels">
        <h2>{title}</h2>
      </div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="camera-video"
        style={{ transform: isMirrored ? 'scaleX(-1)' : 'scaleX(1)' }}
      />
    </div>
  );
};
