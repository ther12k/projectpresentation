import { CalendarRange, Clock, ListTodo } from 'lucide-react';

const WeeklyPlanSlide = ({ content }) => {
  const plans = content?.plans || [];

  return (
    <div className="space-y-6 pb-6">
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
            Sprint Execution
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <CalendarRange className="w-6 h-6 text-blue-600" />
            <span>Weekly Detailed Commitments</span>
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        {plans.map((weekPlan, index) => {
          const isInProgress = weekPlan.status?.toLowerCase() === 'in progress';
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                    <ListTodo className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{weekPlan.week}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {weekPlan.tasks?.length || 0} priority sprint tasks
                    </p>
                  </div>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold self-start sm:self-auto ${
                    isInProgress
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>{weekPlan.status || 'Active'}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {weekPlan.tasks?.map((task, taskIndex) => (
                  <div
                    key={taskIndex}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70 hover:border-blue-300 hover:bg-white hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-100 text-blue-700 text-xs font-black flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {taskIndex + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed pt-0.5">
                      {task}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyPlanSlide;
