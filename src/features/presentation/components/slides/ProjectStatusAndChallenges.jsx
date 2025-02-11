import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, X, AlertTriangle } from 'lucide-react';

const ProjectStatusAndChallenges = ({ content }) => {
    const [selectedPics, setSelectedPics] = useState(new Set());
    const [expandedProjects, setExpandedProjects] = useState({});
    const [activeView, setActiveView] = useState('status');
    // const [activeSheetView, setActiveSheetView] = useState(false);

    const headerRowRef = useRef(null);
    const firstColumnRef = useRef(null);
    const picColumnRef = useRef(null);
    const tasksColumnRef = useRef(null);
    const progressColumnRef = useRef(null);

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
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate = new Date(currentDate);
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dates;
    };

    const dates = getDates();

    // Updated timeline check function
    const isInTimeline = (date, project, type) => {
        if (!project.timeline?.schedule) return false;

        const dateStr = date.toISOString().split('T')[0];

        // For yellow background (duration)
        if (type === 'duration') {
            // Check if date falls between pairs of yellow dates
            const scheduleEntries = Object.entries(project.timeline.schedule);
            for (let i = 0; i < scheduleEntries.length - 1; i++) {
                const [startDate, startType] = scheduleEntries[i];
                const [endDate, endType] = scheduleEntries[i + 1];
                if (startType === 'yellow' && dateStr >= startDate && dateStr <= endDate) {
                    return true;
                }
            }
        }

        // For green background (target)
        if (type === 'target') {
            return project.timeline.schedule[dateStr] === 'green';
        }

        return false;
    };

    useEffect(() => {
        const handleScroll = () => {
            const tableContainer = document.querySelector('.table-container');
            if (!tableContainer) return;

            const scrollLeft = tableContainer.scrollLeft;
            const scrollTop = tableContainer.scrollTop;

            // Update sticky header
            if (headerRowRef.current) {
                headerRowRef.current.style.top = `${scrollTop}px`;
            }

            // Update sticky columns
            [firstColumnRef, picColumnRef, tasksColumnRef, progressColumnRef].forEach((ref, index) => {
                if (ref.current) {
                    const left = index === 0 ? 0 :
                        index === 1 ? 240 :
                            index === 2 ? 360 : 480;
                    ref.current.style.left = `${scrollLeft}px`;
                    ref.current.style.transform = `translateX(${left}px)`;
                }
            });
        };

        const tableContainer = document.querySelector('.table-container');
        tableContainer?.addEventListener('scroll', handleScroll);

        return () => {
            tableContainer?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getCellBackground = (date, project) => {
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        if (isWeekend) {
            return 'bg-red-50';
        }

        if (isInTimeline(date, project, 'target')) {
            return 'bg-green-100';
        }

        if (isInTimeline(date, project, 'duration')) {
            return 'bg-yellow-100';
        }

        return '';
    };

    return (
        <div className="p-6 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md">
                <div className="p-6 space-y-6">
                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h2 className="text-2xl font-bold text-slate-900">Project Overview</h2>
                        <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
                            <button
                                onClick={() => setActiveView('status')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeView === 'status'
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                Status
                            </button>
                            <button
                                onClick={() => setActiveView('challenges')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeView === 'challenges'
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                Challenges
                            </button>
                            <button
                                onClick={() => setActiveView('sheet')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeView === 'sheet'
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                Sheet View
                            </button>
                        </div>
                    </div>

                    {/* PIC Filter Section */}
                    {activeView === 'status' && (
                        <div className="flex flex-wrap gap-2 items-center bg-slate-50 p-4 rounded-lg">
                            <span className="text-sm text-slate-600 font-medium">Filter by PIC:</span>
                            {uniquePics.map(pic => (
                                <button
                                    key={pic}
                                    onClick={() => togglePic(pic)}
                                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedPics.has(pic)
                                        ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                        : 'bg-white text-slate-600 hover:bg-slate-100'
                                        }`}
                                >
                                    {pic}
                                    {selectedPics.has(pic) && (
                                        <X
                                            className="w-3 h-3 ml-2"
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

                    {/* Google Sheet View */}
                    {activeView === 'sheet' && (
                        <div className="overflow-x-auto table-container shadow-sm border border-slate-200 rounded-lg" style={{ maxHeight: '75vh' }}>
                            <table className="min-w-full divide-y divide-slate-200">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th ref={headerRowRef} className="w-60 px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider sticky top-0 left-0 z-30 bg-slate-50 border-r border-slate-200">
                                            Project
                                        </th>
                                        <th ref={headerRowRef} className="w-32 px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider sticky top-0 left-60 z-30 bg-slate-50 border-r border-slate-200">
                                            PIC
                                        </th>
                                        <th ref={headerRowRef} className="w-40 px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider sticky top-0 left-92 z-30 bg-slate-50 border-r border-slate-200">
                                            Tasks
                                        </th>
                                        <th ref={headerRowRef} className="w-24 px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider sticky top-0 left-132 z-30 bg-slate-50 border-r border-slate-200">
                                            Progress
                                        </th>
                                        {dates.map((date, index) => (
                                            <th
                                                key={index}
                                                className={`w-[60px] px-2 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200 ${date.getDay() === 0 || date.getDay() === 6 ? 'bg-red-50' : ''
                                                    }`}
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
                                        ))}
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-slate-200">
                                    {filteredProjects.map((project, index) =>
                                        project.tasks?.map((task, taskIndex) => (
                                            <tr
                                                key={`${index}-${taskIndex}`}
                                                className="hover:bg-gray-50 transition-colors"
                                            >
                                                <td ref={firstColumnRef} className="sticky left-0 z-20 bg-white border-r border-gray-200 px-4 py-3 text-sm text-gray-900 font-medium">
                                                    {taskIndex === 0 ? project.name : ''}
                                                </td>
                                                <td ref={picColumnRef} className="sticky left-[240px] z-20 bg-white border-r border-gray-200 px-4 py-3 text-sm">
                                                    <div className="flex gap-1">
                                                        {task.pic?.split('/').map((pic, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-2 py-1 bg-blue-100 rounded-full text-xs font-medium text-blue-800"
                                                            >
                                                                {pic.trim()}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td ref={tasksColumnRef} className="sticky left-[360px] z-20 bg-white border-r border-gray-200 px-4 py-3 text-sm">
                                                    {task.task}
                                                </td>
                                                <td ref={progressColumnRef} className="sticky left-[480px] z-20 bg-white border-r border-gray-200 px-4 py-3 text-sm text-center">
                                                    <span className={`px-2 py-1 rounded-full text-xs ${task.progress === 100
                                                        ? 'bg-green-100 text-green-800'
                                                        : task.progress === 0
                                                            ? 'bg-red-100 text-red-800'
                                                            : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                        {task.progress}%
                                                    </span>
                                                </td>
                                                {dates.map((date, dateIndex) => (
                                                    <td
                                                        key={dateIndex}
                                                        className={`px-2 py-3 border-r border-gray-100 ${getCellBackground(date, project)}`}
                                                    />
                                                ))}
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Status & Challenges View */}
                    {activeView !== 'sheet' && (
                        <div className="space-y-4">
                            {filteredProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-sm border border-slate-200 hover:border-blue-200 transition-colors"
                                >
                                    <div
                                        className="px-4 py-3 cursor-pointer"
                                        onClick={() => toggleProject(project.name)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-2">
                                                {expandedProjects[project.name] ? (
                                                    <ChevronUp className="text-blue-600 w-4 h-4" />
                                                ) : (
                                                    <ChevronDown className="text-blue-600 w-4 h-4" />
                                                )}
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
                                                    ?.filter(task => selectedPics.size === 0 || task.pic?.split('/').some(pic => selectedPics.has(pic)))
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
                                                                    {task.pic.split('/').map((pic, i) => (
                                                                        <span
                                                                            key={pic}
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                togglePic(pic);
                                                                            }}
                                                                            className={`cursor-pointer hover:text-blue-700 ${selectedPics.has(pic) ? 'text-blue-700 font-medium' : 'text-blue-600'
                                                                                }`}
                                                                        >
                                                                            {pic}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))
                                            ) : (
                                                <div className="space-y-2">
                                                    {project.challenges?.map((challenge, challengeIndex) => (
                                                        <div
                                                            key={challengeIndex}
                                                            className="bg-amber-50 border border-amber-200 rounded-md p-3 text-sm text-amber-700"
                                                        >
                                                            {challenge}
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
            </div>
        </div>
    );
};

export default ProjectStatusAndChallenges;
