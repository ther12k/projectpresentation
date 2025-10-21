import { useState, useEffect, useCallback, useMemo } from 'react'
import Slide from './Slide'
import ParticleBackground from './particles/ParticleBackground'
import {
  presentations,
  getPresentationById,
  languages,
  defaultLanguage
} from '../data/presentations'

export default function Presentation() {
  const [activePresentationId, setActivePresentationId] = useState(presentations[0]?.id ?? '')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [language, setLanguage] = useState(defaultLanguage)
  const activePresentation = useMemo(
    () => getPresentationById(activePresentationId),
    [activePresentationId]
  )
  const slides = useMemo(
    () => activePresentation.getSlides(language),
    [activePresentation, language]
  )
  const totalSlides = slides.length
  const slideMetadata = useMemo(
    () =>
      slides.map((slide, index) => ({
        index,
        title: slide.navTitle ?? slide.header?.title ?? `Slide ${index + 1}`,
        subtitle: slide.header?.subtitle ?? null
      })),
    [slides]
  )

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }, [])

  const goToSlide = useCallback(
    (index) => {
      setCurrentSlide(() => {
        if (index < 0) return 0
        if (index > totalSlides - 1) return totalSlides - 1
        return index
      })
    },
    [totalSlides]
  )

  const activeSlideMeta = slideMetadata[currentSlide] ?? null
  const progress = ((currentSlide + 1) / totalSlides) * 100

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      }

      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prevSlide()
      }

      if (e.key === 'Home') {
        e.preventDefault()
        goToSlide(0)
      }

      if (e.key === 'End') {
        e.preventDefault()
        goToSlide(totalSlides - 1)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [goToSlide, nextSlide, prevSlide, totalSlides])

  useEffect(() => {
    setCurrentSlide(0)
  }, [activePresentationId, language])

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-slate-950">
      <ParticleBackground />

      <div className="relative z-10 flex flex-col items-center w-full min-h-screen p-5 pb-16 gap-10">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                {presentations.map((presentation) => {
                  const isActive = presentation.id === activePresentation.id
                  const baseClasses =
                    'px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all border'
                  const activeClasses =
                    'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-500 shadow-lg'
                  const inactiveClasses =
                    'bg-slate-900/70 text-slate-300 border-slate-700 hover:bg-slate-800/80'

                  return (
                    <button
                      key={presentation.id}
                      type="button"
                      onClick={() => {
                        if (presentation.id !== activePresentationId) {
                          setActivePresentationId(presentation.id)
                        }
                      }}
                      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                      aria-pressed={isActive}
                    >
                      {presentation.title}
                    </button>
                  )
                })}
              </div>
              {languages.map((option) => {
                const isActive = option.code === language
                const baseClasses = 'px-3 py-1 rounded-full text-xs md:text-sm font-semibold transition-all border'
                const activeClasses = 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500 shadow-lg'
                const inactiveClasses = 'bg-slate-900/70 text-slate-300 border-slate-700 hover:bg-slate-800/80'

                return (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => {
                      if (option.code !== language) {
                        setLanguage(option.code)
                      }
                    }}
                    className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                    aria-pressed={isActive}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Previous
              </button>

              <div className="flex-1 min-w-[240px] space-y-1">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-slate-500">
                  <span className="truncate text-pink-200/80 font-semibold">
                    {activePresentation.title}
                  </span>
                  <span className="text-slate-400">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                  </span>
                </div>
                {activePresentation.description ? (
                  <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    {activePresentation.description}
                  </div>
                ) : null}
                <div className="text-xs uppercase tracking-widest text-blue-200/80">
                  {activeSlideMeta?.title}
                </div>
                <div className="w-full h-2 bg-slate-900/70 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center w-full">
          <Slide data={slides[currentSlide]} isActive={true} />
        </div>
      </div>
    </div>
  )
}
