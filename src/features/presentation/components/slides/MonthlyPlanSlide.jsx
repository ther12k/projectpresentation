import { Calendar, Target } from 'lucide-react';

const MonthlyPlanSlide = ({ content }) => {
  const items = content?.items || [];

  return (
    <div className="space-y-6 pb-6">
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
            Strategic Roadmap
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <Target className="w-6 h-6 text-indigo-600" />
            <span>Monthly Target Milestones</span>
          </h2>
        </div>
      </div>

      {items.map((plan, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-500" />
                <h3 className="text-xl font-bold text-slate-900">{plan.title}</h3>
              </div>
              {plan.description && (
                <p className="text-xs text-slate-500 mt-1">{plan.description}</p>
              )}
            </div>
            <span className="text-xs font-bold font-mono bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full self-start sm:self-auto">
              {plan.items?.length || 0} Targets
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {plan.items?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70 hover:border-indigo-300 hover:bg-white hover:shadow-xs transition-all group"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-black flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {itemIndex + 1}
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed pt-0.5">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MonthlyPlanSlide;
