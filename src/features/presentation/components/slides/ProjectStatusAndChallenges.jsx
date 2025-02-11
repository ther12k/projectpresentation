import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, X, AlertTriangle } from 'lucide-react';

const ProjectStatusAndChallenges = ({ content }) => {
  const [selectedPics, setSelectedPics] = useState(new Set());
  const [expandedProjects, setExpandedProjects] = useState({});
  const [activeView, setActiveView] = useState('status');
  const [activeSheetView, setActiveSheetView] = useState(false);

  const headerRowRef = useRef(null);
  const firstColumnRef = useRef(null);

  const uniquePics = useMemo(() => {
    const picsSet = new Set();
    content.projects.forEach(project =>
      project.tasks?.forEach(task =>
        task.pic?.split('/').forEach(pic => picsSet.add(pic))
      )
    );
    return Array.from(picsSet);
  }, [content.projects]);

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

  const filteredProjects = useMemo(() => {
    if (selectedPics.size === 0) return content.projects;
    return content.projects.filter(project =>
      project.tasks?.some(task =>
        task.pic?.split('/').some(pic => selectedPics.has(pic))
      )
    );
  }, [content.projects, selectedPics]);

  const toggleProject = (projectName) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectName]: !prev[projectName]
    }));
  };

  const getDates = () => {
    const startDate = new Date('2025-02-08');
    const endDate = new Date('2025-02-23');
    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const dates = getDates();

  useEffect(() => {
    const handleScroll = () => {
      if (headerRowRef.current) {
        headerRowRef.current.style.top = `${tableContainerRef.current.scrollTop}px`;
      }
      if (firstColumnRef.current) {
        firstColumnRef.current.style.left = `${tableContainerRef.current.scrollLeft}px`;
      }
    };

    const tableContainerRef = document.querySelector('.table-container');
    tableContainerRef?.addEventListener('scroll', handleScroll);

    return () => {
      tableContainerRef?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi pembantu untuk menentukan apakah suatu tanggal berada dalam rentang warna kuning
  const isDateInRange = (date, schedule) => {
    const dateString = date.toLocaleDateString('en-CA');
    if (!schedule) return false;

    const scheduleDates = Object.keys(schedule);
    if (scheduleDates.includes(dateString)) {
      return schedule[dateString] === 'yellow';
    }

    // Periksa untuk rentang warna kuning
    for (let i = 0; i < scheduleDates.length; i++) {
      const scheduledDate = new Date(scheduleDates[i]);
      const nextDate = new Date(scheduledDate);
      nextDate.setDate(scheduledDate.getDate() + 1);

      if (schedule[scheduleDates[i]] === 'yellow' && date >= scheduledDate && date < nextDate) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveView('status')}
              className={`px-4 py-2 rounded-lg ${activeView === 'status' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white transition-colors'
                }`}
            >
              Status
            </button>
            <button
              onClick={() => setActiveView('challenges')}
              className={`px-4 py-2 rounded-lg ${activeView === 'challenges' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white transition-colors'
                }`}
            >
              Challenges
            </button>
            <button
              onClick={() => setActiveSheetView(!activeSheetView)}
              className={`px-4 py-2 rounded-lg ${activeSheetView ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white transition-colors'
                }`}
            >
              Sheet View
            </button>
          </div>
        </div>

        {activeView === 'status' && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-gray-600">Filter by PIC:</span>
            {uniquePics.map(pic => (
              <button
                key={pic}
                onClick={() => togglePic(pic)}
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${selectedPics.has(pic)
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

      {/* Tampilan Google Sheet */}
      {activeSheetView && (
        <div className="overflow-x-auto table-container shadow-sm border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="bg-gray-50 sticky top-0 z-10" ref={headerRowRef}>
              <tr>
                <th className="w-[240px] px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider sticky left-0 z-20 bg-gray-50 border-r border-gray-200">
                  Project
                </th>
                <th className="w-[120px] px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider sticky left-[240px] z-20 bg-gray-50 border-r border-gray-200">
                  PIC
                </th>
                <th className="w-[400px] px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Tasks
                </th>
                <th className="w-[80px] px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Progress
                </th>
                {dates.map((date, index) => {
                  const dayOfWeek = date.getDay();
                  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                  const isToday = date.toDateString() === new Date().toDateString();

                  return (
                    <th
                      key={index}
                      className={`w-[60px] px-2 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider ${
                        isWeekend ? 'bg-red-50' : 'bg-gray-50'
                      } ${isToday ? 'ring-2 ring-blue-500' : ''}`}
                    >
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400">
                          {date.toLocaleDateString('en-US', { weekday: 'short' })}
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                          {date.getDate()}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProjects.map((project, index) =>
                project.tasks?.map((task, taskIndex) => (
                  <tr
                    key={`${index}-${taskIndex}`}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium sticky left-0 z-10 bg-white border-r border-gray-200">
                      {taskIndex === 0 ? project.name : ''}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 sticky left-[240px] z-10 bg-white border-r border-gray-200">
                      <div className="flex gap-1">
                        {task.pic &&
                          task.pic
                            .replace('igbal', 'Iqbal')
                            .split('/')
                            .map((pic, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-blue-100 rounded-full text-xs font-medium text-blue-800 cursor-pointer hover:bg-blue-200"
                                onClick={() => togglePic(pic.trim())}
                              >
                                {pic.trim()}
                              </span>
                            ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 max-w-[400px] truncate">
                      {task.task}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-center">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs ${
                          task.progress === 100
                            ? 'bg-green-100 text-green-800'
                            : task.progress === 0
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {task.progress}%
                        {task.progress > 0 && task.progress < 100 && ';'}
                      </span>
                    </td>
                    {dates.map((date, dateIndex) => {
                      const dayOfWeek = date.getDay();
                      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                      const isToday = date.toDateString() === new Date().toDateString();

                      return (
                        <td
                          key={dateIndex}
                          className={`px-2 py-3 text-center text-xs border-r border-gray-100 ${
                            isWeekend ? 'bg-red-50' : 'bg-white'
                          } ${isToday ? 'ring-2 ring-blue-500' : ''}`}
                        >
                          {/* Add your timeline indicators here */}
                        </td>
                      );
                    })}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {!activeSheetView && (
        <div className="space-y-3 mt-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg shadow-sm"
            >
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

              {expandedProjects[project.name] && (
                <div className="px-4 pb-4 border-t border-blue-100">
                  {activeView === 'status' ? (
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
                                    className={`cursor-pointer hover:text-blue-700 ${selectedPics.has(pic) ? 'text-blue-700 font-medium' : 'text-blue-600'
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
      )}
    </div>
  );
};

export default ProjectStatusAndChallenges;