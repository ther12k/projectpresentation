import React, { useMemo } from "react";

const ProgressComparisonSlide = ({ content }) => {
  const { project, prevProject } = content ?? {};

  const { justFinished, notFinished } = useMemo(() => {
    const justFinished = [];
    const notFinished = [];
    if (!project) return { justFinished, notFinished };

    const prevTasks = prevProject?.tasks ?? [];
    (project.tasks ?? []).forEach((task) => {
      const prevTask = prevTasks.find((t) => t.task === task.task);
      const prevProgress = prevTask ? prevTask.progress : undefined;
      const progress = task.progress ?? 0;

      if (
        progress === 100 &&
        prevProgress !== undefined &&
        prevProgress < 100
      ) {
        justFinished.push({ ...task, prevProgress });
      } else if (progress < 100) {
        notFinished.push({ ...task, prevProgress });
      }
    });

    return { justFinished, notFinished };
  }, [project, prevProject]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 p-10">
        <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            No project data provided
          </h2>
        </div>
      </div>
    );
  }

  const hasContent =
    justFinished.length > 0 ||
    notFinished.length > 0 ||
    (project.issues?.length ?? 0) > 0;

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Progress Update vs Previous
          </p>
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold text-slate-900">
              {project.name}
            </h2>
            <span className="text-sm font-medium text-slate-500">
              {project.progress}%
            </span>
          </div>
        </header>

        {!hasContent ? (
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-sm text-slate-600">
              No outstanding or newly finished tasks, and no issues reported.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {justFinished.length > 0 && (
              <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-green-700">
                  Just Finished
                </p>
                <ul className="space-y-2">
                  {justFinished.map((task) => (
                    <li
                      key={task.task}
                      className="flex items-center justify-between rounded-lg bg-green-50 px-4 py-3 text-base"
                    >
                      <span className="text-slate-800">{task.task}</span>
                      <span className="text-sm font-semibold text-green-700">
                        {task.prevProgress}% → 100%
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {notFinished.length > 0 && (
              <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-amber-700">
                  Not Finished
                </p>
                <ul className="space-y-2">
                  {notFinished.map((task) => (
                    <li
                      key={task.task}
                      className="flex items-center justify-between rounded-lg bg-amber-50 px-4 py-3 text-base"
                    >
                      <span className="text-slate-800">{task.task}</span>
                      <span className="flex items-center gap-2 text-sm font-semibold text-amber-700">
                        {task.prevProgress !== undefined &&
                        task.prevProgress !== task.progress ? (
                          <span className="text-slate-400">
                            {task.prevProgress}%
                          </span>
                        ) : null}
                        <span>{task.progress}%</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.issues?.length > 0 && (
              <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-rose-700">
                  Issues
                </p>
                <ul className="space-y-3">
                  {project.issues.map((issue, issueIndex) => (
                    <li
                      key={issueIndex}
                      className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3"
                    >
                      <p className="text-base font-semibold text-rose-800">
                        {issue.title}
                      </p>
                      {issue.detail && (
                        <p className="mt-2 text-sm leading-relaxed text-rose-700">
                          {issue.detail}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressComparisonSlide;
