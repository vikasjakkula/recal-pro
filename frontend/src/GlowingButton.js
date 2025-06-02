import React from 'react';
import './GlowingButton.css';

const GlowingButton = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="glow-btn">
      <span>{children || "Start Your Journey Now"}</span>
    </button>
  );
};

export default GlowingButton; 