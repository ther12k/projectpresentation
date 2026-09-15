import { AlertTriangle, Clock, User } from "lucide-react";

const formatPercent = (val) => {
  if (typeof val !== "number" || isNaN(val)) return "0%";
  return `${Math.round(val)}%`;
};

const UnfinishedProjectSlide = ({ content }) => {
  const project = content?.project ?? content;

  if (!project) {
    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">
          No project data provided
        </h2>
        <p className="mt-2 text-xs text-slate-500">
          Add unfinished project details in <code>unfinishedProjects</code> to populate this slide.
        </p>
      </div>
    );
  }

  const visibleTasks = (project.tasks ?? []).filter(
    (task) => task && task.hidden !== true && task.completed !== true
  );

  return (
    <div className="space-y-6 pb-6">
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm space-y-2.5">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full">
                Under-Delivered Project Focus
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight truncate">
              {project.name ?? "Untitled Project"}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
            {typeof project.progress === "number" && (
              <span className="inline-flex items-center font-mono rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-700">
                {formatPercent(project.progress)} complete
              </span>
            )}
            {project.status && (
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                {project.status}
              </span>
            )}
            {project.owner && (
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                <User className="w-3 h-3" />
                {project.owner}
              </span>
            )}
          </div>
        </div>

        {project.summary && (
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600 pt-1 border-t border-slate-100">
            {project.summary}
          </p>
        )}
      </header>

      <section className="space-y-3">
        {visibleTasks.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-xs">
            <p className="text-sm font-semibold text-slate-600">
              No outstanding tasks recorded for this project.
            </p>
          </div>
        ) : (
          visibleTasks.map((task, taskIndex) => (
            <article
              key={`${project.name}-${task.title ?? task.assignee ?? taskIndex}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2.5"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-base font-bold text-slate-900">
                    {task.title || "Pending Task"}
                  </p>
                  {task.assignee && (
                    <p className="text-xs text-slate-500 mt-0.5">
                      PIC: <span className="font-semibold text-slate-700">{task.assignee}</span>
                    </p>
                  )}
                </div>
                {task.status && (
                  <span className="self-start inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-800">
                    <Clock className="w-3 h-3" />
                    {task.status}
                  </span>
                )}
              </div>
              {task.progressNote && (
                <p className="text-xs text-slate-600 leading-relaxed">
                  {task.progressNote}
                </p>
              )}
              {task.blocker && (
                <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-3 text-xs text-amber-900 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Blocker:</span> {task.blocker}
                  </div>
                </div>
              )}
              {task.nextStep && (
                <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 text-xs text-blue-900">
                  <span className="font-bold">Next Step:</span> {task.nextStep}
                </div>
              )}
            </article>
          ))
        )}
      </section>
    </div>
  );
};

export default UnfinishedProjectSlide;
