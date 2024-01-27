// Loading.tsx
import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";

interface LoadingProps {
  isLoading: boolean;
}

const Loader: React.FC<LoadingProps> = ({ isLoading }) => {
  const [progressPercentage, setProgressPercentage] = useState<number>(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const startProgress = () => {
      intervalId = setInterval(() => {
        setProgressPercentage((prevPercentage) => {
          const newPercentage = prevPercentage + 1;
          if (newPercentage >= 100) {
            clearInterval(intervalId!);
          }
          return newPercentage;
        });
      }, 24); 
    };

    if (isLoading) {
      startProgress();
    } else {
      setProgressPercentage(0);
      if (intervalId) {
        clearInterval(intervalId);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ProgressBar
          now={progressPercentage}
          label={`${progressPercentage.toFixed(2)}%`}
          animated
          variant="danger"
          style={{
            height: "26px",
            width: "400px",
          }}
        />
      </div>
    );
  } else {
    return null; // Or any other content you want to display when isLoading is false
  }
};

export default Loader;
