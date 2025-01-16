import React from 'react';
import ProgressBar from '../shared/ProgressBar';

const ProjectStatusSlide = ({ content }) => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Project Status Overview</h2>
      <div className="space-y-8">
        {content.projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <span className="text-lg font-medium">{project.progress}</span>
            </div>
            <ProgressBar progress={project.progress} />
            <div className="mt-4 space-y-3">
              {project.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className="bg-gray-50 p-3 rounded">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{task.task}</span>
                    <span>{task.progress}</span>
                  </div>
                  <p className="text-sm text-gray-600">PIC: {task.pic}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStatusSlide;