import { useState, useMemo } from 'react';
import {
  ChevronDown,
  ChevronUp,
  X,
  AlertTriangle,
  Search,
  CheckCircle2,
  Clock,
  Layers,
  ListFilter
} from 'lucide-react';

const formatPercent = (val) => {
  if (typeof val !== 'number' || isNaN(val)) return '0%';
  return `${Math.round(val)}%`;
};

const ProjectStatusAndChallenges = ({ content }) => {
  const projects = useMemo(() => content?.projects || [], [content?.projects]);
  const [selectedPics, setSelectedPics] = useState(new Set());
  const [expandedProjects, setExpandedProjects] = useState({});
  const [activeView, setActiveView] = useState('status');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all unique PICs and their task counts
  const picStats = useMemo(() => {
    const counts = {};
    projects.forEach((project) =>
      project.tasks?.forEach((task) =>
        task.pic?.split('/').forEach((p) => {
          const pic = p.trim();
          if (pic) counts[pic] = (counts[pic] || 0) + 1;
        })
      )
    );
    return counts;
  }, [projects]);

  const uniquePics = useMemo(() => Object.keys(picStats).sort(), [picStats]);

  // Overall portfolio KPI stats
  const portfolioStats = useMemo(() => {
    const total = projects.length;
    const completed = projects.filter(
      (p) => (p.progress ?? 0) >= 100 || p.status?.toLowerCase() === 'completed'
    ).length;
    const inProgress = total - completed;
    const avgProgress = total > 0
      ? Math.round(projects.reduce((acc, p) => acc + (p.progress ?? 0), 0) / total)
      : 0;
    const totalChallenges = projects.reduce(
      (acc, p) => acc + (p.challenges?.length ?? 0),
      0
    );

    return { total, completed, inProgress, avgProgress, totalChallenges };
  }, [projects]);

  const togglePic = (pic) => {
    setSelectedPics((prev) => {
      const next = new Set(prev);
      if (next.has(pic)) next.delete(pic);
      else next.add(pic);
      return next;
    });
  };

  const clearPicFilters = () => setSelectedPics(new Set());

  // Filtered projects based on PIC and Search
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return projects.filter((project) => {
      // PIC filter
      if (selectedPics.size > 0) {
        const matchesPic = project.tasks?.some((task) =>
          task.pic?.split('/').some((p) => selectedPics.has(p.trim()))
        );
        if (!matchesPic) return false;
      }

      // Search query filter
      if (query) {
        const matchesName = project.name?.toLowerCase().includes(query);
        const matchesTask = project.tasks?.some((task) =>
          task.task?.toLowerCase().includes(query) ||
          task.pic?.toLowerCase().includes(query)
        );
        const matchesChallenge = project.challenges?.some((c) =>
          c.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesTask && !matchesChallenge) return false;
      }

      return true;
    });
  }, [projects, selectedPics, searchQuery]);

  const toggleProject = (projectName) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectName]: !prev[projectName],
    }));
  };

  const expandAll = () => {
    const all = {};
    filteredProjects.forEach((p) => { all[p.name] = true; });
    setExpandedProjects(all);
  };

  const collapseAll = () => setExpandedProjects({});

  // Dynamic date range from all projects' timelines
  const dates = useMemo(() => {
    let minDate = null;
    let maxDate = null;

    projects.forEach((p) => {
      if (p.timeline?.start) {
        const d = new Date(p.timeline.start);
        if (!minDate || d < minDate) minDate = d;
      }
      if (p.timeline?.end) {
        const d = new Date(p.timeline.end);
        if (!maxDate || d > maxDate) maxDate = d;
      }
      if (p.timeline?.schedule) {
        Object.keys(p.timeline.schedule).forEach((dateStr) => {
          const d = new Date(dateStr);
          if (!minDate || d < minDate) minDate = d;
          if (!maxDate || d > maxDate) maxDate = d;
        });
      }
    });

    // Fallback: 14 days around today if no timeline found
    if (!minDate || !maxDate) {
      const now = new Date();
      minDate = new Date(now);
      minDate.setDate(now.getDate() - 7);
      maxDate = new Date(now);
      maxDate.setDate(now.getDate() + 7);
    }

    // Cap timeline view to max 28 days for performance and layout
    const result = [];
    const curr = new Date(minDate);
    curr.setHours(0, 0, 0, 0);
    const end = new Date(maxDate);
    end.setHours(23, 59, 59, 999);

    let count = 0;
    while (curr <= end && count < 35) {
      result.push(new Date(curr));
      curr.setDate(curr.getDate() + 1);
      count++;
    }

    return result;
  }, [projects]);

  const todayStr = new Date().toISOString().split('T')[0];

  const getCellBackground = (date, project) => {
    const dateStr = date.toISOString().split('T')[0];
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;

    if (project.timeline?.schedule) {
      const status = project.timeline.schedule[dateStr];
      if (status === 'green') return 'bg-emerald-200/80 text-emerald-900';
      if (status === 'yellow') return 'bg-amber-200/80 text-amber-900';
      if (status === 'red') return 'bg-rose-200/80 text-rose-900';
      if (status === 'orange') return 'bg-orange-200/80 text-orange-900';
    }

    if (isWeekend) return 'bg-slate-100/60';
    return '';
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Header with Title and View Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Portfolio Overview & Status
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                High-level delivery tracking, individual task breakdown, and technical blockers
              </p>
            </div>
          </div>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center gap-1.5 bg-slate-100/90 p-1 rounded-xl border border-slate-200/70 self-start md:self-auto">
          <button
            onClick={() => setActiveView('status')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'status'
                ? 'bg-white text-blue-600 shadow-xs ring-1 ring-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Project Status ({projects.length})
          </button>
          <button
            onClick={() => setActiveView('challenges')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeView === 'challenges'
                ? 'bg-white text-blue-600 shadow-xs ring-1 ring-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Challenges</span>
            {portfolioStats.totalChallenges > 0 && (
              <span className="bg-amber-100 text-amber-700 text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                {portfolioStats.totalChallenges}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveView('sheet')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'sheet'
                ? 'bg-white text-blue-600 shadow-xs ring-1 ring-slate-200/50'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Timeline Matrix
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Projects</p>
            <p className="text-2xl font-black text-slate-900 mt-1">{portfolioStats.total}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Active portfolio</p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Layers className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Portfolio Progress</p>
            <p className="text-2xl font-black text-indigo-600 mt-1">{portfolioStats.avgProgress}%</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Average completion</p>
          </div>
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Completed</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">{portfolioStats.completed}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">100% delivered</p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">In Progress</p>
            <p className="text-2xl font-black text-amber-600 mt-1">{portfolioStats.inProgress}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Under active delivery</p>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      {activeView === 'status' && (
        <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search project, task, or PIC..."
                className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Expand / Collapse All Controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={expandAll}
                className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-[11px] font-semibold text-slate-600 hover:bg-slate-100 transition"
              >
                Expand All
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-[11px] font-semibold text-slate-600 hover:bg-slate-100 transition"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* PIC Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 mr-1">
              <ListFilter className="w-3.5 h-3.5" />
              <span>PIC:</span>
            </span>
            {uniquePics.map((pic) => {
              const isSelected = selectedPics.has(pic);
              return (
                <button
                  key={pic}
                  onClick={() => togglePic(pic)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50/50'
                  }`}
                >
                  <span>{pic}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-blue-700 text-blue-100' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {picStats[pic]}
                  </span>
                  {isSelected && <X className="w-3 h-3 ml-0.5" />}
                </button>
              );
            })}
            {selectedPics.size > 0 && (
              <button
                onClick={clearPicFilters}
                className="text-xs text-blue-600 hover:text-blue-800 font-semibold underline px-2"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      )}

      {/* VIEW 1: Project Status Accordion Cards */}
      {activeView === 'status' && (
        <div className="space-y-3 pb-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500">
              <Search className="w-8 h-8 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-semibold">No projects match the current filter</p>
              <p className="text-xs text-slate-400 mt-1">Try resetting the search query or PIC selection</p>
            </div>
          ) : (
            filteredProjects.map((project, index) => {
              const isExpanded = Boolean(expandedProjects[project.name]);
              const isDone = (project.progress ?? 0) >= 100 || project.status?.toLowerCase() === 'completed';
              const progressPct = Math.min(100, Math.max(0, Math.round(project.progress ?? 0)));

              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl border transition-all duration-200 relative ${
                    isExpanded
                      ? 'border-blue-300 shadow-md ring-1 ring-blue-500/10'
                      : 'border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  {/* Card Header (Sticky & Compact) */}
                  <div
                    className={`sticky top-0 z-10 px-3.5 py-2.5 sm:px-4 cursor-pointer select-none transition-colors bg-white/95 backdrop-blur-md ${
                      isExpanded
                        ? 'border-b border-slate-200/80 rounded-t-xl shadow-2xs'
                        : 'rounded-xl hover:bg-slate-50/60'
                    }`}
                    onClick={() => toggleProject(project.name)}
                  >
                    <div className="flex items-center justify-between gap-3">
                      {/* Left: Chevron + Project Title + Badges + Subtask count */}
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <button
                          type="button"
                          className="flex-shrink-0 p-1 rounded-md text-slate-400 hover:text-blue-600 transition"
                          aria-label={isExpanded ? "Collapse project" : "Expand project"}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-blue-600" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-500" />
                          )}
                        </button>

                        <div className="flex items-center gap-2 min-w-0 flex-wrap">
                          <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                            {project.name}
                          </h3>

                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${
                              isDone
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {project.status || (isDone ? 'Completed' : 'In Progress')}
                          </span>

                          {project.challenges?.length > 0 && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full whitespace-nowrap">
                              <AlertTriangle className="w-3 h-3 text-amber-600" />
                              <span>{project.challenges.length} challenge</span>
                            </span>
                          )}

                          <span className="text-[11px] text-slate-400 font-medium whitespace-nowrap hidden sm:inline">
                            • {project.tasks?.length || 0} subtasks
                          </span>
                        </div>
                      </div>

                      {/* Right: Progress Metric & Bar */}
                      <div className="flex items-center gap-3 flex-shrink-0 justify-end">
                        <div className="w-20 sm:w-32 bg-slate-100 rounded-full h-1.5 overflow-hidden hidden sm:block">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              isDone
                                ? 'bg-emerald-500'
                                : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                            }`}
                            style={{ width: `${progressPct}%` }}
                          />
                        </div>

                        <span
                          className={`text-xs sm:text-sm font-bold font-mono min-w-[36px] text-right ${
                            isDone ? 'text-emerald-600' : 'text-slate-800'
                          }`}
                        >
                          {formatPercent(project.progress)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body: Task List Breakdown */}
                  {isExpanded && (
                    <div className="border-t border-slate-100 bg-slate-50/60 p-3.5 sm:p-4 space-y-2 rounded-b-xl">
                      {project.tasks?.length === 0 ? (
                        <p className="text-xs text-slate-400 italic">No tasks listed for this project</p>
                      ) : (
                        project.tasks
                          ?.filter((task) =>
                            selectedPics.size === 0 ||
                            task.pic?.split('/').some((p) => selectedPics.has(p.trim()))
                          )
                          .map((task, taskIdx) => {
                            const taskDone = task.progress === 100;
                            const taskStarted = task.progress > 0;

                            return (
                              <div
                                key={taskIdx}
                                className="bg-white rounded-xl p-3 border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                              >
                                <div className="flex items-start gap-2.5 flex-1 min-w-0">
                                  <div className="pt-0.5">
                                    {taskDone ? (
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                    ) : taskStarted ? (
                                      <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                    ) : (
                                      <div className="w-4 h-4 rounded-full border-2 border-slate-300 flex-shrink-0" />
                                    )}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="text-sm font-semibold text-slate-800">
                                      {task.task}
                                    </p>
                                    {task.pic && (
                                      <div className="flex items-center gap-1 mt-1 flex-wrap">
                                        <span className="text-[11px] text-slate-400">PIC:</span>
                                        {task.pic.split('/').map((p, i) => (
                                          <span
                                            key={i}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              togglePic(p.trim());
                                            }}
                                            className="text-[11px] font-semibold bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-700 px-2 py-0.5 rounded-md cursor-pointer transition"
                                          >
                                            {p.trim()}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="flex items-center gap-3 sm:min-w-[140px] justify-between sm:justify-end">
                                  <div className="w-20 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                    <div
                                      className={`h-full rounded-full ${
                                        taskDone
                                          ? 'bg-emerald-500'
                                          : taskStarted
                                          ? 'bg-amber-500'
                                          : 'bg-slate-300'
                                      }`}
                                      style={{ width: `${task.progress}%` }}
                                    />
                                  </div>
                                  <span
                                    className={`text-xs font-bold font-mono px-2 py-0.5 rounded-full ${
                                      taskDone
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : taskStarted
                                        ? 'bg-amber-100 text-amber-700'
                                        : 'bg-slate-100 text-slate-600'
                                    }`}
                                  >
                                    {task.progress}%
                                  </span>
                                </div>
                              </div>
                            );
                          })
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* VIEW 2: Challenges & Blockers View */}
      {activeView === 'challenges' && (
        <div className="space-y-4">
          {projects.filter((p) => p.challenges?.length > 0).length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
              <p className="text-base font-bold text-slate-800">All clear!</p>
              <p className="text-xs text-slate-400 mt-1">No outstanding challenges or blockers reported across active projects.</p>
            </div>
          ) : (
            projects
              .filter((p) => p.challenges?.length > 0)
              .map((project, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-white rounded-2xl border border-amber-200/80 p-5 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                      <h3 className="text-base font-bold text-slate-900">{project.name}</h3>
                    </div>
                    <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                      {formatPercent(project.progress)}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {project.challenges.map((ch, chIdx) => (
                      <div
                        key={chIdx}
                        className="bg-amber-50/80 rounded-xl p-3.5 border border-amber-200/60 text-sm font-medium text-amber-900 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
          )}
        </div>
      )}

      {/* VIEW 3: Timeline Matrix / Sheet View */}
      {activeView === 'sheet' && (
        <div className="space-y-3 pb-8">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>Scroll horizontally to inspect daily schedules</span>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400" /> Target / Done
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-amber-400" /> Work In Progress
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-rose-400" /> Critical / Red
              </span>
            </div>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xs">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead>
                <tr className="bg-slate-50/90 text-slate-600">
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider sticky left-0 bg-slate-50 z-10 w-52 shadow-xs">
                    Project
                  </th>
                  <th className="px-3 py-3 text-xs font-bold uppercase tracking-wider w-28">
                    PIC
                  </th>
                  <th className="px-3 py-3 text-xs font-bold uppercase tracking-wider w-64">
                    Task
                  </th>
                  <th className="px-3 py-3 text-xs font-bold uppercase tracking-wider w-20 text-center">
                    Progress
                  </th>
                  {dates.map((d, dIdx) => {
                    const dStr = d.toISOString().split('T')[0];
                    const isToday = dStr === todayStr;
                    const isWeekend = d.getDay() === 0 || d.getDay() === 6;

                    return (
                      <th
                        key={dIdx}
                        className={`w-10 px-1 py-2 text-center border-l border-slate-200 text-[11px] ${
                          isToday
                            ? 'bg-blue-100 text-blue-900 font-black ring-2 ring-blue-500 inset-0'
                            : isWeekend
                            ? 'bg-slate-100 text-slate-400'
                            : 'text-slate-600'
                        }`}
                      >
                        <div className="font-mono">{d.getDate()}</div>
                        <div className="text-[9px] uppercase tracking-tight text-slate-400">
                          {d.toLocaleDateString('en-US', { weekday: 'narrow' })}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-xs">
                {filteredProjects.map((project, pIdx) =>
                  project.tasks?.map((task, tIdx) => (
                    <tr key={`${pIdx}-${tIdx}`} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-4 py-2.5 font-bold text-slate-900 sticky left-0 bg-white z-10 shadow-xs whitespace-nowrap">
                        {tIdx === 0 ? project.name : ''}
                      </td>
                      <td className="px-3 py-2.5 whitespace-nowrap">
                        {task.pic?.split('/').map((pic, i) => (
                          <span
                            key={i}
                            className="inline-block px-1.5 py-0.5 text-[10px] font-bold text-blue-700 bg-blue-50 rounded-md mr-1"
                          >
                            {pic.trim()}
                          </span>
                        ))}
                      </td>
                      <td className="px-3 py-2.5 text-slate-700 max-w-xs truncate">
                        {task.task}
                      </td>
                      <td className="px-3 py-2.5 text-center font-mono font-bold">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] ${
                            task.progress === 100
                              ? 'bg-emerald-100 text-emerald-700'
                              : task.progress === 0
                              ? 'bg-slate-100 text-slate-500'
                              : 'bg-amber-100 text-amber-700'
                          }`}
                        >
                          {task.progress}%
                        </span>
                      </td>
                      {dates.map((d, dIdx) => (
                        <td
                          key={dIdx}
                          className={`px-1 py-2 text-center border-l border-slate-100 ${getCellBackground(
                            d,
                            project
                          )}`}
                        />
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectStatusAndChallenges;
