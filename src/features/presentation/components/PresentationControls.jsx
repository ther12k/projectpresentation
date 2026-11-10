import { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  LayoutGrid,
  Keyboard,
  X
} from 'lucide-react';

const PresentationControls = ({
  currentSlide,
  totalSlides,
  slides = [],
  onPrevious,
  onNext,
  onSelectSlide,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error('Error toggling fullscreen:', err);
    }
  };

  const currentSlideInfo = slides[currentSlide];
  const slideTitle = currentSlideInfo?.title ||
    (currentSlideInfo?.type === 'title' ? 'Title' :
     currentSlideInfo?.type === 'projectStatus' ? 'Project Overview' :
     currentSlideInfo?.type === 'progressComparison' ? `${currentSlideInfo?.content?.project?.name || 'Project'} • Compare` :
     currentSlideInfo?.type === 'monthlyPlan' ? 'Monthly Plan' :
     currentSlideInfo?.type === 'weeklyPlan' ? 'Weekly Plan' :
     `Slide ${currentSlide + 1}`);

  const progressPercent = totalSlides > 0 ? ((currentSlide + 1) / totalSlides) * 100 : 0;

  return (
    <div className="relative">
      {/* Slide Quick-Jump Drawer Modal */}
      {showDrawer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-150"
          onClick={() => setShowDrawer(false)}
        >
          <div
            ref={drawerRef}
            className="w-full max-w-3xl max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-800">Presentation Outline</h3>
                <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full font-semibold">
                  {totalSlides} slides
                </span>
              </div>
              <button
                onClick={() => setShowDrawer(false)}
                className="p-1.5 rounded-lg hover:bg-slate-200/80 text-slate-500 hover:text-slate-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {slides.map((s, idx) => {
                const isActive = idx === currentSlide;
                const label = s.title ||
                  (s.type === 'title' ? 'Title Cover' :
                   s.type === 'projectStatus' ? 'Portfolio Overview' :
                   s.type === 'progressComparison' ? s.content?.project?.name || 'Comparison' :
                   s.type === 'monthlyPlan' ? 'Monthly Plan' :
                   s.type === 'weeklyPlan' ? 'Weekly Plan' :
                   `Slide ${idx + 1}`);

                const progress = typeof s.content?.project?.progress === 'number'
                  ? Math.round(s.content.project.progress)
                  : null;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (onSelectSlide) onSelectSlide(idx);
                      setShowDrawer(false);
                    }}
                    className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between gap-2 group ${
                      isActive
                        ? 'border-blue-500 bg-blue-50/80 shadow-sm ring-2 ring-blue-500/20'
                        : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}>
                        #{idx + 1}
                      </span>
                      {progress !== null && (
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          progress === 100
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {progress}%
                        </span>
                      )}
                    </div>
                    <div className="font-semibold text-sm text-slate-800 line-clamp-2">
                      {label}
                    </div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">
                      {s.type}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Control Bar */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200/80 overflow-hidden">
        {/* Visual Progress Bar */}
        <div className="h-1.5 w-full bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center justify-between px-4 py-2.5 gap-2 sm:gap-4">
          {/* Left: Navigation Arrows & Outline */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onPrevious}
              disabled={currentSlide === 0}
              className="flex items-center justify-center h-9 w-9 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-blue-600 active:scale-95 disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-slate-700 transition"
              title="Previous slide (← / PageUp)"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={onNext}
              disabled={currentSlide === totalSlides - 1}
              className="flex items-center justify-center h-9 w-9 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-blue-600 active:scale-95 disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-slate-700 transition"
              title="Next slide (→ / Space / PageDown)"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {onSelectSlide && (
              <button
                onClick={() => setShowDrawer(true)}
                className="flex items-center gap-1.5 px-3 h-9 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
                title="View outline / jump to slide"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden md:inline">Outline</span>
              </button>
            )}
          </div>

          {/* Center: Slide Counter & Current Slide Title */}
          <div className="flex items-center gap-2 min-w-0 flex-1 justify-center">
            <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap">
              {currentSlide + 1} <span className="text-slate-400 font-normal">/</span> {totalSlides}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-700 truncate max-w-[200px] sm:max-w-[340px]">
              {slideTitle}
            </span>
          </div>

          {/* Right: Shortcuts hint & Fullscreen */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1 text-[11px] text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
              <Keyboard className="w-3.5 h-3.5" />
              <span>Use</span>
              <kbd className="font-mono bg-white px-1 rounded shadow-2xs border border-slate-200 text-slate-600">←</kbd>
              <kbd className="font-mono bg-white px-1 rounded shadow-2xs border border-slate-200 text-slate-600">→</kbd>
              <span>or Space</span>
            </div>

            <button
              onClick={toggleFullscreen}
              className="flex items-center justify-center h-9 w-9 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-blue-600 active:scale-95 transition"
              title={isFullscreen ? 'Exit fullscreen (F / Esc)' : 'Enter fullscreen (F)'}
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationControls;
