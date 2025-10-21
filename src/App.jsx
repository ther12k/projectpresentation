import { useState } from 'react'
import { Layers } from 'lucide-react'
import Presentation from './components/Presentation'
import ProjectPresentation from './features/presentation/ProjectPresentation'

const VIEW_OPTIONS = [
  { id: 'swot', label: 'SWOT Presentation' },
  { id: 'project-report', label: 'Project Report' }
]

function App() {
  const [activeView, setActiveView] = useState(VIEW_OPTIONS[0].id)
  const [isHoveringNav, setIsHoveringNav] = useState(false)
  const [manualNavOpen, setManualNavOpen] = useState(false)
  const navVisible = isHoveringNav || manualNavOpen

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

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-slate-800 bg-slate-900/80 p-1.5 shadow-lg backdrop-blur"
        onMouseEnter={() => setIsHoveringNav(true)}
        onMouseLeave={() => {
          if (!manualNavOpen) {
            setIsHoveringNav(false)
          }
        }}
        onFocus={() => setIsHoveringNav(true)}
        onBlur={handleContainerBlur}
      >
        <div className="flex items-center gap-2">
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
            className={`flex items-center gap-2 overflow-hidden transition-[max-width,opacity,transform] duration-200 ${
              navVisible
                ? 'max-w-xl opacity-100 translate-y-0 pointer-events-auto'
                : 'max-w-0 opacity-0 -translate-y-1 pointer-events-none'
            }`}
          >
            {VIEW_OPTIONS.map((option) => {
              const isActive = option.id === activeView
              const baseClasses =
                'px-4 py-1.5 text-xs md:text-sm font-semibold rounded-full transition-all border whitespace-nowrap'
              const activeClasses =
                'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500 shadow-md'
              const inactiveClasses =
                'bg-slate-900/60 text-slate-300 border-slate-700 hover:bg-slate-800/80'

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    if (option.id !== activeView) {
                      setActiveView(option.id)
                    }
                    setManualNavOpen(false)
                  }}
                  className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                  aria-pressed={isActive}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {activeView === 'project-report' ? <ProjectPresentation /> : <Presentation />}
    </div>
  )
}

export default App
