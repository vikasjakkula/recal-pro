import React from 'react';

const Logo = ({ size = 40, className = '' }) => {
  return (
    <div 
      className={`logo ${className}`}
      style={{ 
        width: size, 
        height: size,
        backgroundColor: '#4F46E5',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: size * 0.5
      }}
    >
      R
    </div>
  );
};

export default Logo; 