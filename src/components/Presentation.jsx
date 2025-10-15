import { useState, useEffect, useCallback } from 'react'
import Slide from './Slide'
import Controls from './Controls'
import ParticleBackground from './particles/ParticleBackground'
import { slides } from '../data/slides'

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length
  const slideMetadata = slides.map((slide, index) => ({
    index,
    title: slide.navTitle ?? slide.header?.title ?? `Slide ${index + 1}`,
    subtitle: slide.header?.subtitle ?? null
  }))

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

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-slate-950">
      <ParticleBackground />

      <div className="relative z-10 flex flex-col items-center w-full min-h-screen p-5 pb-16">
        <div className="w-full max-w-5xl space-y-4 mb-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-blue-400/70">
                Slide {String(currentSlide + 1).padStart(2, '0')} of {String(totalSlides).padStart(2, '0')}
              </div>
              <div className="text-2xl font-semibold text-white">
                {activeSlideMeta?.title}
              </div>
              {activeSlideMeta?.subtitle && (
                <div className="text-sm text-slate-400 mt-1">
                  {activeSlideMeta.subtitle}
                </div>
              )}
            </div>
            <div className="text-xs text-slate-500 md:text-sm">
              Use ← →, PageUp/PageDown, Home/End, or Space to navigate
            </div>
          </div>

          <div className="w-full h-2 bg-slate-900/70 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="overflow-x-auto">
            <div className="flex w-full min-w-max gap-2">
              {slideMetadata.map((metadata) => {
                const isActive = metadata.index === currentSlide
                return (
                  <button
                    key={metadata.index}
                    type="button"
                    onClick={() => goToSlide(metadata.index)}
                    className={`group px-4 py-2 rounded-full border transition-colors duration-200 ${
                      isActive
                        ? 'border-blue-500/80 bg-blue-500/20 text-white shadow-lg shadow-blue-500/20'
                        : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-blue-500/40 hover:text-white'
                    }`}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    <div className="text-[11px] uppercase tracking-widest text-blue-400/70 group-hover:text-blue-300/80">
                      {String(metadata.index + 1).padStart(2, '0')}
                    </div>
                    <div className="text-sm font-semibold whitespace-nowrap">
                      {metadata.title}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center w-full">
          <Slide data={slides[currentSlide]} isActive={true} />
        </div>

        <Controls
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onNext={nextSlide}
          onPrev={prevSlide}
          onGoTo={goToSlide}
        />
      </div>
    </div>
  )
}
