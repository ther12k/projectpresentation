import { useMemo, useState } from 'react';
import { AlertTriangle, Clock, ListTodo, Search, User, X } from 'lucide-react';

const formatPercent = (val) => {
  if (typeof val !== "number" || isNaN(val)) return "0%";
  return `${Math.round(val)}%`;
};

// One flat list of every open task (progress < 100) across all projects.
const UnfinishedTasksSlide = ({ content }) => {
  const sourceProjects = content?.projects ?? [];
  const [searchQuery, setSearchQuery] = useState('');

  const rows = useMemo(() => {
    const flat = [];
    sourceProjects.forEach((project, pIdx) => {
      (project.tasks ?? []).forEach((task, tIdx) => {
        flat.push({
          key: `${pIdx}-${tIdx}`,
          project: project.name ?? 'Untitled Project',
          projectProgress: project.progress,
          title: task.title || 'Pending Task',
          assignee: task.assignee,
          progress: typeof task.progress === 'number' ? task.progress : 0,
          blocker: task.blocker,
          nextStep: task.nextStep,
        });
      });
    });

    const query = searchQuery.trim().toLowerCase();
    if (!query) return flat;

    return flat.filter(
      (row) =>
        row.title.toLowerCase().includes(query) ||
        row.project.toLowerCase().includes(query) ||
        (row.assignee ?? '').toLowerCase().includes(query)
    );
  }, [sourceProjects, searchQuery]);

  const totalOpen = content?.openTasks ?? rows.length;
  const inProgressCount = rows.filter((row) => row.progress > 0).length;
  const notStartedCount = rows.length - inProgressCount;
  const projectCount = new Set(rows.map((row) => row.project)).size;

  if (sourceProjects.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-emerald-200">
        <h2 className="text-xl font-bold text-emerald-950">No unfinished tasks</h2>
        <p className="mt-2 text-xs text-emerald-700">
          Every task in the active data is at 100%.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-6">
      <header className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                Under-Delivered Task Focus
              </span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Unfinished Tasks
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 self-start sm:self-auto">
            <ListTodo className="w-4 h-4" />
            {totalOpen} open
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 text-xs">
          <div className="p-2.5 bg-slate-50 rounded-xl">
            <span className="text-slate-400 font-medium block">Open Tasks</span>
            <span className="text-base font-bold text-slate-800">{totalOpen}</span>
          </div>
          <div className="p-2.5 bg-amber-50/70 rounded-xl">
            <span className="text-amber-700 font-medium block">In Progress</span>
            <span className="text-base font-bold text-amber-800">{inProgressCount}</span>
          </div>
          <div className="p-2.5 bg-slate-50 rounded-xl">
            <span className="text-slate-500 font-medium block">Not Started</span>
            <span className="text-base font-bold text-slate-700">{notStartedCount}</span>
          </div>
          <div className="p-2.5 bg-purple-50/70 rounded-xl">
            <span className="text-purple-700 font-medium block">Projects Affected</span>
            <span className="text-base font-bold text-purple-800">{projectCount}</span>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search task, project, or PIC..."
            className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </header>

      <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-xs">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <thead>
            <tr className="bg-slate-50/90 text-slate-600">
              <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider w-52">
                Project
              </th>
              <th className="px-3 py-3 text-xs font-bold uppercase tracking-wider">
                Task
              </th>
              <th className="px-3 py-3 text-xs font-bold uppercase tracking-wider w-36">
                PIC
              </th>
              <th className="px-3 py-3 text-xs font-bold uppercase tracking-wider w-48">
                Progress
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {rows.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-10 text-center text-slate-500">
                  <p className="text-sm font-semibold">No unfinished tasks match the search</p>
                </td>
              </tr>
            ) : (
              rows.map((row) => {
                const isStarted = row.progress > 0;
                return (
                  <tr key={row.key} className="hover:bg-slate-50/80 transition-colors align-top">
                    <td className="px-4 py-2.5 font-bold text-slate-900 whitespace-nowrap">
                      {row.project}
                    </td>
                    <td className="px-3 py-2.5 text-slate-700">
                      <p className="font-semibold text-slate-800">{row.title}</p>
                      {row.blocker && (
                        <p className="mt-1 text-[11px] text-rose-700 flex items-start gap-1">
                          <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                          <span>{row.blocker}</span>
                        </p>
                      )}
                      {row.nextStep && (
                        <p className="mt-1 text-[11px] text-blue-700 flex items-start gap-1">
                          <span className="font-bold flex-shrink-0">Next:</span>
                          <span>{row.nextStep}</span>
                        </p>
                      )}
                    </td>
                    <td className="px-3 py-2.5 whitespace-nowrap">
                      {row.assignee ? (
                        <span className="inline-flex items-center gap-1 text-blue-700 bg-blue-50 rounded-md px-1.5 py-0.5 text-[11px] font-bold">
                          <User className="w-3 h-3" />
                          {row.assignee}
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              isStarted ? 'bg-amber-500' : 'bg-slate-300'
                            }`}
                            style={{ width: `${row.progress}%` }}
                          />
                        </div>
                        <span
                          className={`text-xs font-bold font-mono px-2 py-0.5 rounded-full ${
                            isStarted
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {formatPercent(row.progress)}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5" />
        Listed automatically from the active data: every task below 100%.
      </p>
    </div>
  );
};

export default UnfinishedTasksSlide;
