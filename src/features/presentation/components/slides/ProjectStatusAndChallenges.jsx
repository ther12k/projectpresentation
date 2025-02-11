import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, X, AlertTriangle } from 'lucide-react';

const ProjectStatusAndChallenges = ({ content }) => {
  const [selectedPics, setSelectedPics] = useState(new Set());
  const [expandedProjects, setExpandedProjects] = useState({});
  const [activeView, setActiveView] = useState('status'); // 'status' or 'challenges'

  // Get unique PICs from all tasks
  const uniquePics = useMemo(() => {
    const picsSet = new Set();
    content.projects.forEach(project => 
      project.tasks?.forEach(task => 
        task.pic?.split('/').forEach(pic => picsSet.add(pic))
      )
    );
    return Array.from(picsSet);
  }, [content.projects]);

  // Toggle PIC selection
  const togglePic = (pic) => {
    setSelectedPics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(pic)) {
        newSet.delete(pic);
      } else {
        newSet.add(pic);
      }
      return newSet;
    });
  };

  // Filter projects based on selected PICs
  const filteredProjects = useMemo(() => {
    if (selectedPics.size === 0) return content.projects;
    return content.projects.filter(project =>
      project.tasks?.some(task =>
        task.pic?.split('/').some(pic => selectedPics.has(pic))
      )
    );
  }, [content.projects, selectedPics]);

  // Toggle project expansion
  const toggleProject = (projectName) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectName]: !prev[projectName]
    }));
  };

  return (
    <div className="p-8 bg-white rounded-lg">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveView('status')}
              className={`px-4 py-2 rounded-lg ${
                activeView === 'status'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Status
            </button>
            <button
              onClick={() => setActiveView('challenges')}
              className={`px-4 py-2 rounded-lg ${
                activeView === 'challenges'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Challenges
            </button>
          </div>
        </div>
        
        {/* PIC Filter Section - Only show in status view */}
        {activeView === 'status' && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-gray-600">Filter by PIC:</span>
            {uniquePics.map(pic => (
              <button
                key={pic}
                onClick={() => togglePic(pic)}
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                  selectedPics.has(pic)
                    ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {pic}
                {selectedPics.has(pic) && (
                  <X 
                    className="w-3 h-3 ml-1" 
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePic(pic);
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-3 mt-6">
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
                  {project.challenges?.length > 0 && (
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                  )}
                </div>
                {activeView === 'status' && (
                  <span className="text-sm text-gray-600">{project.progress}%</span>
                )}
              </div>

              {/* Project Progress Bar - Only in status view */}
              {activeView === 'status' && (
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 rounded-full h-2 transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Collapsible Content */}
            {expandedProjects[project.name] && (
              <div className="px-4 pb-4 border-t border-blue-100">
                {activeView === 'status' ? (
                  // Status View
                  project.tasks
                    ?.filter(task => 
                      selectedPics.size === 0 || 
                      task.pic?.split('/').some(pic => selectedPics.has(pic))
                    )
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
                        {task.pic && (
                          <div className="flex gap-1 text-xs items-center">
                            <span>PIC:</span>
                            {task.pic.split('/').map((pic, i, arr) => (
                              <React.Fragment key={pic}>
                                <span
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    togglePic(pic);
                                  }}
                                  className={`cursor-pointer hover:text-blue-700 ${
                                    selectedPics.has(pic) ? 'text-blue-700 font-medium' : 'text-blue-600'
                                  }`}
                                >
                                  {pic}
                                </span>
                                {i < arr.length - 1 && <span>/</span>}
                              </React.Fragment>
                            ))}
                          </div>
                        )}
                      </div>
                    ))
                ) : (
                  // Challenges View
                  <div className="space-y-3 mt-3">
                    {project.challenges?.map((challenge, index) => (
                      <div key={index} className="bg-white p-3 rounded border border-amber-200">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">{challenge.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{challenge.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStatusAndChallenges;