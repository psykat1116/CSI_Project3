import React from "react";

interface ProgressCircleProps {
  progress?: number;
  size?: number;
}

const ProgressCircle = ({
  progress = 0.75,
  size = 60,
}: ProgressCircleProps) => {
  const angle = progress * 360;
  return (
    <div
      style={{
        background: `radial-gradient(rgb(212,212,212) 40%, transparent 20%), conic-gradient(transparent 0deg ${angle}deg, #3457D5 ${angle}deg 360deg), #138808`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
