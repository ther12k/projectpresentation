import React, { useState } from 'react';
import ProgressBar from '../shared/ProgressBar';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProjectStatusSlide = ({ content }) => {
  const [selectedPic, setSelectedPic] = useState(null);
  const [expandedProjects, setExpandedProjects] = useState({});

  // Filter projects based on the selected PIC
  const filteredProjects = selectedPic
    ? content.projects.filter((project) =>
        project.tasks.some((task) => 
          task.pic.split('/').includes(selectedPic)
        )
      )
    : content.projects;

  // Toggle project expansion
  const toggleProject = (projectName) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectName]: !prev[projectName]
    }));
  };

  // Render PIC names with individual click handlers
  const renderPICs = (picString) => {
    const pics = picString.split('/');
    
    return (
      <div className="flex gap-1 text-xs">
        <span>PIC: </span>
        {pics.map((pic, index) => (
          <React.Fragment key={pic}>
            <span
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPic(pic);
              }}
              className={`cursor-pointer hover:text-blue-700 ${
                selectedPic === pic ? 'text-blue-700 font-medium' : 'text-blue-600'
              }`}
            >
              {pic}
            </span>
            {index < pics.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="p-8 bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Status Overview</h2>

      {/* Reset Filter Button */}
      {selectedPic && (
        <button
          onClick={() => setSelectedPic(null)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Show All Projects
        </button>
      )}

      <div className="space-y-3">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-lg shadow-sm"
          >
            {/* Project Header - Always Visible */}
            <div 
              className="px-4 py-3 cursor-pointer"
              onClick={() => toggleProject(project.name)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  {expandedProjects[project.name] ? 
                    <ChevronUp className="text-blue-600 w-4 h-4" /> : 
                    <ChevronDown className="text-blue-600 w-4 h-4" />
                  }
                  <h3 className="text-blue-600 font-medium">{project.name}</h3>
                </div>
                <span className="text-sm text-gray-600">{project.progress}%</span>
              </div>

              {/* Project Progress Bar - Always Visible */}
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 rounded-full h-2 transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Collapsible Task Details */}
            {expandedProjects[project.name] && (
              <div className="px-4 pb-4 border-t border-blue-100">
                {project.tasks
                  .filter((task) => !selectedPic || task.pic.split('/').includes(selectedPic))
                  .map((task, taskIndex) => (
                    <div
                      key={taskIndex}
                      className="mt-3 bg-white p-3 rounded border border-gray-100"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex flex-col flex-grow">
                          <span className="text-sm text-gray-800">{task.task}</span>
                          <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
                            <div
                              className="bg-blue-500 rounded-full h-1.5"
                              style={{ width: `${task.progress}%` }}
                            />
                          </div>
                        </div>
                        <span className="ml-4 text-xs text-gray-500">
                          {task.progress}%
                        </span>
                      </div>

                      {renderPICs(task.pic)}
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStatusSlide;