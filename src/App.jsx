import { useMemo, useState } from 'react'
import { Layers } from 'lucide-react'
import Presentation from './components/Presentation'
import ProjectPresentation from './features/presentation/ProjectPresentation'

const VIEW_OPTIONS = [
  { id: 'project-report', label: 'Project Report', group: 'primary' },
  { id: 'swot', label: 'SWOT Presentation', group: 'primary' },
  { id: 'downtime', label: 'Downtime Rundown', group: 'secondary' },
  { id: 'supabase', label: 'Supabase Architecture', group: 'secondary' }
]

function App() {
  const [activeView, setActiveView] = useState(VIEW_OPTIONS[0].id)
  const [isHoveringNav, setIsHoveringNav] = useState(false)
  const [manualNavOpen, setManualNavOpen] = useState(false)
  const navVisible = isHoveringNav || manualNavOpen

  const primaryOptions = useMemo(
    () => VIEW_OPTIONS.filter((option) => option.group === 'primary'),
    []
  )
  const secondaryOptions = useMemo(
    () => VIEW_OPTIONS.filter((option) => option.group === 'secondary'),
    []
  )

  const handleIconClick = () => {
    setManualNavOpen((prev) => {
      const next = !prev
      setIsHoveringNav(next)
      return next
    })
  }

  const handleContainerBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsHoveringNav(false)
      setManualNavOpen(false)
    }
  }

  const renderActiveView = () => {
    switch (activeView) {
      case 'project-report':
        return <ProjectPresentation variant="dashboard" />
      case 'downtime':
        return <ProjectPresentation variant="downtime" />
      case 'supabase':
        return <ProjectPresentation variant="supabase" />
      case 'swot':
      default:
        return <Presentation />
    }
  }

  const renderOptionButton = (option) => {
    const isActive = option.id === activeView
    const baseClasses =
      'px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full transition-all border whitespace-nowrap'
    const activeClasses =
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500 shadow-md'
    const inactivePrimaryClasses =
      'bg-slate-900/60 text-slate-300 border-slate-700 hover:bg-slate-800/80'
    const inactiveSecondaryClasses =
      'bg-slate-800/60 text-slate-300/80 border-dashed border-slate-700/80 hover:bg-slate-800/80 hover:text-slate-100'
    const computedClasses = isActive
      ? activeClasses
      : option.group === 'secondary'
        ? inactiveSecondaryClasses
        : inactivePrimaryClasses

    return (
      <button
        key={option.id}
        type="button"
        onClick={() => {
          if (option.id !== activeView) {
            setActiveView(option.id)
          }
          setManualNavOpen(false)
          setIsHoveringNav(false)
        }}
        className={`${baseClasses} ${computedClasses}`}
        aria-pressed={isActive}
      >
        {option.label}
      </button>
    )
  }

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed top-3 left-1/2 z-50 -translate-x-1/2 rounded-full border border-slate-800 bg-slate-900/80 p-1.5 shadow-lg backdrop-blur"
        onMouseEnter={() => setIsHoveringNav(true)}
        onMouseLeave={() => {
          if (!manualNavOpen) {
            setIsHoveringNav(false)
          }
        }}
        onFocus={() => setIsHoveringNav(true)}
        onBlur={handleContainerBlur}
      >
        <div className="flex items-center gap-2 px-1">
          <button
            type="button"
            onClick={handleIconClick}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="Toggle presentation navigation"
            aria-expanded={navVisible}
          >
            <Layers className="h-4 w-4" aria-hidden="true" />
          </button>
          <div
            id="view-switcher"
            className={`flex items-center gap-3 overflow-hidden transition-[max-width,opacity,transform] duration-200 ${
              navVisible
                ? 'max-w-3xl opacity-100 translate-y-0 pointer-events-auto'
                : 'max-w-0 opacity-0 -translate-y-1 pointer-events-none'
            }`}
          >
            <div className="flex items-center gap-2">
              {primaryOptions.map((option) => renderOptionButton(option))}
            </div>
            {secondaryOptions.length > 0 ? (
              <div className="flex items-center gap-2 border-l border-slate-700/70 pl-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Links
                </span>
                {secondaryOptions.map((option) => renderOptionButton(option))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {renderActiveView()}
    </div>
  )
}

export default App
