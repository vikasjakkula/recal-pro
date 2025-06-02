import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="flex items-center space-x-1">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-150"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-300"></div>
      </div>
    </div>
  );
};

export default Loading; 