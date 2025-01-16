import React from 'react';

const TitleSlide = ({ content }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
      <p className="text-xl">{content.date}</p>
    </div>
  );
};

export default TitleSlide;