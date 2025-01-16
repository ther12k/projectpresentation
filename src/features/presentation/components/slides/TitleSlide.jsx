import React from 'react';

const TitleSlide = ({ content }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">{content.title}</h1>
      <p className="text-2xl italic drop-shadow-md">{content.date}</p>
    </div>
  );
};

export default TitleSlide;
