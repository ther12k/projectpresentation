import { useMemo } from 'react';
import {
  Calendar,
  Sparkles,
  CheckCircle2,
  Clock,
  TrendingUp,
  FolderKanban
} from 'lucide-react';

const TitleSlide = ({ content }) => {
  const { title, date, projects = [] } = content || {};

  const stats = useMemo(() => {
    if (!projects || projects.length === 0) return null;
    const total = projects.length;
    const completed = projects.filter(
      (p) => (p.progress ?? 0) >= 100 || p.status?.toLowerCase() === 'completed'
    ).length;
    const inProgress = total - completed;
    const avgProgress = Math.round(
      projects.reduce((acc, p) => acc + (p.progress ?? 0), 0) / total
    );
    const totalTasks = projects.reduce((acc, p) => acc + (p.tasks?.length ?? 0), 0);

    return { total, completed, inProgress, avgProgress, totalTasks };
  }, [projects]);

  return (
    <div className="flex-1 flex flex-col justify-between py-2 sm:py-6">
      {/* Top Header: Brand Identity & Current Date */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-md shadow-blue-500/25 text-white font-black text-xl tracking-wider">
            H
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-blue-600 font-bold">
              Halotec Solutions
            </p>
            <p className="text-sm font-bold text-slate-800">
              Portfolio & Engineering Operations
            </p>
          </div>
        </div>

        <div className="self-start sm:self-auto flex items-center gap-2 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700">
          <Calendar className="w-3.5 h-3.5 text-blue-600" />
          <span>{date}</span>
        </div>
      </div>

      {/* Main Hero: Title & Executive Summary */}
      <div className="my-auto py-8 sm:py-12 space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Weekly Sprint & Operations Briefing</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
          {title || 'Project Status Updates'}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
          Real-time delivery progress, milestone trajectories, and active technical blockers across all terminal & autogate implementations.
        </p>
      </div>

      {/* Bottom: Live Portfolio Summary Metrics */}
      {stats && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 pt-4 border-t border-slate-100">
          <div className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all shadow-2xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Total Projects
              </span>
              <div className="p-1.5 rounded-xl bg-blue-100/70 text-blue-700">
                <FolderKanban className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
              {stats.total}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">{stats.totalTasks} registered tasks</p>
          </div>

          <div className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200/80 hover:border-indigo-300 hover:bg-white transition-all shadow-2xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Portfolio Health
              </span>
              <div className="p-1.5 rounded-xl bg-indigo-100/70 text-indigo-700">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-indigo-600 font-mono">
              {stats.avgProgress}%
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Average completion</p>
          </div>

          <div className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200/80 hover:border-emerald-300 hover:bg-white transition-all shadow-2xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Delivered
              </span>
              <div className="p-1.5 rounded-xl bg-emerald-100/70 text-emerald-700">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">
              {stats.completed}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Projects at 100%</p>
          </div>

          <div className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200/80 hover:border-amber-300 hover:bg-white transition-all shadow-2xs">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                In Progress
              </span>
              <div className="p-1.5 rounded-xl bg-amber-100/70 text-amber-700">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-600 font-mono">
              {stats.inProgress}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Active delivery tracks</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TitleSlide;
