import React from 'react';

const HighscopeRefactorSlide = ({ content }) => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Highscope App Refactoring Plan</h2>
      {content.items.map((plan, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-blue-500">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">{plan.title}</h3>
          <p className="text-gray-600 mb-6 text-lg">{plan.description}</p>
          <div className="space-y-3">
            {plan.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {itemIndex + 1}
                </span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighscopeRefactorSlide;