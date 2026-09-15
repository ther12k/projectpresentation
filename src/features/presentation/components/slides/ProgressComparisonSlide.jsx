import { useMemo, useState, useEffect, useRef } from 'react';
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Layers,
  User
} from 'lucide-react';

const ProgressComparisonSlide = ({ content }) => {
  const { project, prevProject } = content ?? {};
  const [isSticky, setIsSticky] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollEl = containerRef.current?.closest('.overflow-auto') || window;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const top = scrollEl === window ? window.scrollY : scrollEl.scrollTop;
          setIsSticky((prev) => {
            if (!prev && top > 85) return true;
            if (prev && top < 35) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    scrollEl.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => scrollEl.removeEventListener('scroll', handleScroll);
  }, []);

  const currentProgress = typeof project?.progress === 'number' ? Math.round(project.progress) : 0;
  const prevProgress = typeof prevProject?.progress === 'number' ? Math.round(prevProject.progress) : undefined;
  const delta = prevProgress !== undefined ? currentProgress - prevProgress : null;

  const { justFinished, notFinished, allTasks } = useMemo(() => {
    const justFinished = [];
    const notFinished = [];
    const allTasks = project?.tasks ?? [];
    if (!project) return { justFinished, notFinished, allTasks };

    const prevTasks = prevProject?.tasks ?? [];

    allTasks.forEach((task) => {
      const prevTask = prevTasks.find((t) => t.task === task.task);
      const taskPrevProgress = prevTask ? prevTask.progress : undefined;
      const progress = task.progress ?? 0;

      if (
        progress === 100 &&
        taskPrevProgress !== undefined &&
        taskPrevProgress < 100
      ) {
        justFinished.push({ ...task, prevProgress: taskPrevProgress });
      } else if (progress < 100) {
        notFinished.push({ ...task, prevProgress: taskPrevProgress });
      }
    });

    return { justFinished, notFinished, allTasks };
  }, [project, prevProject]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <div className="p-4 rounded-2xl bg-slate-100 text-slate-400 mb-3">
          <Layers className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">No project data provided</h2>
      </div>
    );
  }

  const isCompleted = currentProgress >= 100 || project.status?.toLowerCase() === 'completed';
  const completedTasksCount = allTasks.filter((t) => t.progress === 100).length;

  return (
    <div ref={containerRef} className="space-y-6 pb-6 relative">
      {/* Zero-Layout-Shift Slim Sticky Bar */}
      <div className="sticky top-0 z-30 h-0 overflow-visible pointer-events-none">
        <div
          className={`transition-all duration-200 ease-out transform ${
            isSticky
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-3 pointer-events-none'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-md py-2.5 px-4 flex items-center justify-between gap-3">
            {/* Left: Project Title & Badges */}
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight truncate">
                {project.name}
              </h2>

              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-full whitespace-nowrap hidden xs:inline-block">
                Sprint Comparison
              </span>

              <span className="text-[11px] text-slate-500 font-semibold whitespace-nowrap hidden md:inline">
                • {completedTasksCount}/{allTasks.length} tasks completed
              </span>
            </div>

            {/* Center: Inline Progress Bar */}
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
              <div className="w-28 md:w-36 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isCompleted
                      ? 'bg-emerald-500'
                      : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
                  }`}
                  style={{ width: `${currentProgress}%` }}
                />
              </div>
            </div>

            {/* Right: Delta and Progress */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 justify-end">
              {delta !== null && delta !== 0 && (
                <div
                  className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-black font-mono ${
                    delta > 0
                      ? 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-500/20'
                      : 'bg-rose-100 text-rose-800 ring-1 ring-rose-500/20'
                  }`}
                >
                  <TrendingUp className="w-3 h-3" />
                  <span>{delta > 0 ? `+${delta}%` : `${delta}%`}</span>
                </div>
              )}

              <div className="text-right font-black font-mono text-lg sm:text-xl text-slate-900 leading-tight">
                {currentProgress}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Summary Card (Normal flow, static height, zero layout shift) */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-full">
                Sprint Comparison
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">•</span>
              <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                Current Week vs Baseline
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight truncate">
              {project.name}
            </h2>
          </div>

          {/* Right Hero Badge: Progress and Delta */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {delta !== null && delta !== 0 && (
              <div
                className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-black font-mono ${
                  delta > 0
                    ? 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-500/20'
                    : 'bg-rose-100 text-rose-800 ring-1 ring-rose-500/20'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{delta > 0 ? `+${delta}%` : `${delta}%`}</span>
              </div>
            )}
            {delta === 0 && (
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">
                No change
              </span>
            )}
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-black font-mono text-slate-900 leading-tight">
                {currentProgress}%
              </div>
              {prevProgress !== undefined && (
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                  was {prevProgress}%
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Visual progress trajectory bar */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold text-slate-500">
            <span>Progress trajectory</span>
            <span>{completedTasksCount} of {allTasks.length} tasks completed</span>
          </div>
          <div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            {prevProgress !== undefined && prevProgress > 0 && (
              <div
                className="absolute top-0 left-0 h-full bg-slate-300 rounded-full opacity-60"
                style={{ width: `${prevProgress}%` }}
                title={`Previous: ${prevProgress}%`}
              />
            )}
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                isCompleted
                  ? 'bg-emerald-500'
                  : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
              }`}
              style={{ width: `${currentProgress}%` }}
            />
          </div>
        </div>

        {/* Quick KPI stats row */}
        <div className="flex flex-wrap items-center gap-2 pt-1.5 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 rounded-lg border border-slate-200/60">
            <span className="text-slate-400 font-medium">Total:</span>
            <span className="font-bold text-slate-800">{allTasks.length}</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50/70 rounded-lg border border-emerald-200/60">
            <span className="text-emerald-700 font-medium">Completed:</span>
            <span className="font-bold text-emerald-800">{completedTasksCount}</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50/70 rounded-lg border border-amber-200/60">
            <span className="text-amber-700 font-medium">Pending:</span>
            <span className="font-bold text-amber-800">{notFinished.length}</span>
          </div>
          {justFinished.length > 0 && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-purple-50/70 rounded-lg border border-purple-200/60">
              <Sparkles className="w-3 h-3 text-purple-600" />
              <span className="text-purple-700 font-medium">Progressed:</span>
              <span className="font-bold text-purple-800">{justFinished.length} finished</span>
            </div>
          )}
        </div>
      </div>

      {/* SECTION 1: Just Finished Tasks (Celebration) */}
      {justFinished.length > 0 && (
        <section className="bg-white rounded-2xl p-5 border border-emerald-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-900">
              Delivered This Week ({justFinished.length})
            </h3>
          </div>

          <div className="space-y-2">
            {justFinished.map((task, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">{task.task}</p>
                    {task.pic && (
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        PIC: <span className="font-semibold text-emerald-800">{task.pic}</span>
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {task.prevProgress}%
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-xs font-mono font-bold bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                    100%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: Not Finished / Ongoing Tasks */}
      {notFinished.length > 0 ? (
        <section className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                Remaining & In Progress ({notFinished.length})
              </h3>
            </div>
          </div>

          <div className="space-y-2.5">
            {notFinished.map((task, idx) => {
              const isStarted = (task.progress ?? 0) > 0;
              const hasImproved = task.prevProgress !== undefined && task.progress > task.prevProgress;

              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="pt-0.5">
                      {isStarted ? (
                        <Clock className="w-4 h-4 text-amber-500" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-slate-900">{task.task}</p>
                        {hasImproved && (
                          <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-1.5 py-0.2 rounded-md">
                            +{task.progress - task.prevProgress}%
                          </span>
                        )}
                      </div>
                      {task.pic && (
                        <div className="flex items-center gap-1 mt-1">
                          <User className="w-3 h-3 text-slate-400" />
                          <span className="text-[11px] text-slate-500 font-medium">
                            {task.pic}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:min-w-[170px] justify-between sm:justify-end">
                    <div className="w-24 bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          isStarted ? 'bg-amber-500' : 'bg-slate-300'
                        }`}
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                    <div className="text-right font-mono text-xs">
                      {task.prevProgress !== undefined && task.prevProgress !== task.progress && (
                        <span className="text-slate-400 mr-1.5 line-through">
                          {task.prevProgress}%
                        </span>
                      )}
                      <span
                        className={`font-bold px-2 py-0.5 rounded-full ${
                          isStarted ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {task.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200 text-center space-y-2">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h3 className="text-lg font-bold text-emerald-950">All Tasks Completed!</h3>
          <p className="text-xs text-emerald-700">
            This project has zero pending or unfinished tasks for this cycle.
          </p>
        </div>
      )}

      {/* SECTION 3: Issues & Blockers */}
      {project.issues?.length > 0 && (
        <section className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-rose-100 text-rose-700">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
              Issues & Blockers ({project.issues.length})
            </h3>
          </div>

          <div className="space-y-2.5">
            {project.issues.map((issue, idx) => {
              const isResolved = issue.status === 'done';
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-colors ${
                    isResolved
                      ? 'border-emerald-200 bg-emerald-50/50'
                      : 'border-rose-200 bg-rose-50/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {isResolved ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                      )}
                      <p
                        className={`text-sm font-bold ${
                          isResolved ? 'text-emerald-900' : 'text-rose-900'
                        }`}
                      >
                        {issue.title}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isResolved
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isResolved ? 'Resolved' : 'Active Blocker'}
                    </span>
                  </div>

                  {issue.detail && (
                    <p
                      className={`text-xs mt-2 leading-relaxed pl-6 ${
                        isResolved ? 'text-emerald-700' : 'text-rose-700'
                      }`}
                    >
                      {issue.detail}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProgressComparisonSlide;
