import React from 'react';

const WeeklyPlanSlide = ({ content }) => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Weekly Detailed Plan</h2>
      <div className="space-y-6">
        {content.plans.map((weekPlan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">{weekPlan.week}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                weekPlan.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {weekPlan.status}
              </span>
            </div>
            <div className="space-y-3">
              {weekPlan.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className="bg-green-50 p-4 rounded">
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyPlanSlide;