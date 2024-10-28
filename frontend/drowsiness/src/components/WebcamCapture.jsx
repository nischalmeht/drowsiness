import React, { useRef, useCallback, useState,useEffect  } from 'react';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
       
      capture();
    }, 5000); 
    return () => clearInterval(interval);
  }, []);
  // Capture the screenshot from webcam
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    
    setImageSrc(imageSrc);
  }, [webcamRef]);

  return (
    <div>
      <h2>Webcam Capture</h2>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={550}
        height={950}
      />
      {/* <button onClick={capture}>Capture</button> */}

      {imageSrc && (
        <div>
          <h3>Captured Image</h3>
          <img src={imageSrc} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
