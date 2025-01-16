import React from 'react';

const MonthlyPlanSlide = ({ content }) => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Monthly Work Plan</h2>
      {content.items.map((plan, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
          <p className="text-gray-600 mb-6">{plan.description}</p>
          <div className="space-y-4">
            {plan.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center gap-4 bg-blue-50 p-4 rounded">
                <span className="font-bold text-blue-600">{itemIndex + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MonthlyPlanSlide;