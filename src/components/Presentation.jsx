import { useState, useEffect, useCallback } from 'react'
import Slide from './Slide'
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

      <div className="relative z-10 flex flex-col items-center w-full min-h-screen p-5 pb-16 gap-10">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Previous
              </button>

              <div className="flex-1">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-400 mb-2">
                  <span className="truncate text-blue-300/80">
                    {activeSlideMeta?.title}
                  </span>
                  <span>
                    {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                  </span>
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
