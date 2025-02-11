import React, { useState } from 'react';
import ProgressBar from '../shared/ProgressBar';

const ProjectStatusSlide = ({ content }) => {
  const [selectedPic, setSelectedPic] = useState(null);

  // Filter projects based on the selected PIC
  const filteredProjects = selectedPic
    ? content.projects.filter((project) =>
        project.tasks.some((task) => task.pic === selectedPic)
      )
    : content.projects;

  return (
    <div className="p-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Status Overview</h2>

      {/* Reset Filter Button */}
      {selectedPic && (
        <button
          onClick={() => setSelectedPic(null)}
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Show All Projects
        </button>
      )}

      <div className="space-y-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            {/* Project Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-blue-700">{project.name}</h3>
              <span className="text-lg font-medium text-gray-700">{project.progress}%</span>
            </div>

            {/* Project Progress Bar */}
            <ProgressBar progress={project.progress} variant="primary" />

            {/* Task Details */}
            <div className="mt-6 space-y-4">
              {project.tasks
                .filter((task) => !selectedPic || task.pic === selectedPic) // Show only tasks for the selected PIC
                .map((task, taskIndex) => (
                  <div
                    key={taskIndex}
                    className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200 hover:bg-green-200 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-2">
                      {/* Task Name and Progress */}
                      <div className="flex flex-col flex-grow">
                        <span className="font-medium text-gray-800">{task.task}</span>
                        <ProgressBar progress={task.progress} variant="secondary" />
                      </div>
                      {/* Task Progress */}
                      <span className="ml-4 text-sm font-medium text-gray-600">{task.progress}%</span>
                    </div>

                    {/* PIC Highlight and Clickable */}
                    <p
                      onClick={() => setSelectedPic(task.pic)}
                      className={`text-sm font-semibold mt-2 cursor-pointer hover:underline ${
                        selectedPic === task.pic ? 'text-purple-800' : 'text-purple-600'
                      }`}
                    >
                      PIC: {task.pic}
                    </p>
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
