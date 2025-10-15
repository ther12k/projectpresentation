import { useState, useEffect } from 'react'
import Slide from './Slide'
import Controls from './Controls'
import ParticleBackground from './particles/ParticleBackground'
import { slides } from '../data/slides'

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentSlide])

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-slate-950">
      <ParticleBackground />

      <div className="relative z-10 flex flex-col items-center w-full min-h-screen p-5 pb-16">
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
