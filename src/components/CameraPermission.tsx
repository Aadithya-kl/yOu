import React from 'react';

interface CameraPermissionProps {
  onRequestPermission: () => void;
  error: string | null;
}

export const CameraPermission: React.FC<CameraPermissionProps> = ({ onRequestPermission, error }) => {
  return (
    <div className="permission-container">
      <div className="permission-content">
        {error ? (
          <>
            <h1>Camera access required</h1>
            <p>Allow camera access to experience both perspectives.</p>
            <button onClick={onRequestPermission}>Try Again</button>
          </>
        ) : (
          <>
            <h1>HOW OTHERS SEE ME</h1>
            <p>One camera. Two perspectives.</p>
            <button onClick={onRequestPermission}>Enable Camera</button>
          </>
        )}
      </div>
    </div>
  );
};
