import React from 'react';

const ProgressBar = ({ progress, variant = 'primary' }) => {
  const percentage = parseInt(progress);
  const getBarColor = () => {
    if (variant === 'primary') return 'bg-blue-600';
    if (variant === 'secondary') return 'bg-blue-400';
    return 'bg-gray-400';
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className={`${getBarColor()} h-2.5 rounded-full transition-all duration-300 ease-in-out`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;