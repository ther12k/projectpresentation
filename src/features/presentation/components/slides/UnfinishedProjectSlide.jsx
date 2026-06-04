import React from "react";

const UnfinishedProjectSlide = ({ content }) => {
  const project = content?.project ?? content;

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 p-10">
        <div className="max-w-3xl mx-auto rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            No project data provided
          </h2>
          <p className="mt-4 text-slate-600">
            Add unfinished project details in <code>unfinishedProjects</code> to
            populate this slide.
          </p>
        </div>
      </div>
    );
  }

  const visibleTasks = (project.tasks ?? []).filter(
    (task) => task && task.hidden !== true && task.completed !== true
  );

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col space-y-6">
        <header className="space-y-3">
          <h2 className="text-4xl font-bold text-slate-900">
            {project.name ?? "Untitled Project"}
          </h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {typeof project.progress === "number" && (
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
                {project.progress}% complete
              </span>
            )}
            {project.status && (
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                {project.status}
              </span>
            )}
            {project.owner && (
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                PIC: {project.owner}
              </span>
            )}
            {project.lastUpdated && (
              <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-500">
                Updated {project.lastUpdated}
              </span>
            )}
          </div>
          {project.summary && (
            <p className="text-base leading-relaxed text-slate-600">
              {project.summary}
            </p>
          )}
        </header>

        <section className="flex-1 space-y-4">
          {visibleTasks.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-sm text-slate-600">
                No outstanding tasks recorded for this project.
              </p>
            </div>
          ) : (
            visibleTasks.map((task, taskIndex) => (
              <article
                key={`${project.name}-${task.title ?? task.assignee ?? taskIndex}`}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      {task.title || "Pending Task"}
                    </p>
                    {task.assignee && (
                      <p className="text-sm text-slate-500">
                        PIC: {task.assignee}
                      </p>
                    )}
                  </div>
                  {task.status && (
                    <span className="self-start rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                      {task.status}
                    </span>
                  )}
                </div>
                {task.progressNote && (
                  <p className="mt-3 text-sm text-slate-600">
                    {task.progressNote}
                  </p>
                )}
                {task.blocker && (
                  <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
                    <span className="font-semibold">Blocker:</span>{" "}
                    {task.blocker}
                  </div>
                )}
                {task.nextStep && (
                  <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm text-sky-800">
                    <span className="font-semibold">Next Step:</span>{" "}
                    {task.nextStep}
                  </div>
                )}
              </article>
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default UnfinishedProjectSlide;
