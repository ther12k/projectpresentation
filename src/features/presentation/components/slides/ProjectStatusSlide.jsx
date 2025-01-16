import React from 'react';
import ProgressBar from '../shared/ProgressBar';

const ProjectStatusSlide = ({ content }) => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Project Status Overview</h2>
      <div className="space-y-8">
        {content.projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <span className="text-lg font-medium">{project.progress}</span>
            </div>
            <ProgressBar progress={project.progress} variant="primary" />
            
            <div className="mt-6 space-y-4">
              {project.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className="bg-gray-50 p-4 rounded">
                  <div className="flex justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{task.task}</span>
                        <span className="ml-2">{task.progress}</span>
                      </div>
                      <ProgressBar progress={task.progress} variant="secondary" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">PIC: {task.pic}</p>
                </div>
              ))}
            </div>

            {project.challenges.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-red-600 mb-2">Challenges:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="text-sm text-gray-700">{challenge}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStatusSlide;