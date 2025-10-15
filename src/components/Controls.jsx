import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Controls({ currentSlide, totalSlides, onNext, onPrev }) {
  return (
    <div className="relative z-20 mt-6 flex justify-center w-full">
      <div className="flex items-center gap-5 bg-slate-900/95 backdrop-blur-xl px-8 py-4 rounded-full border border-blue-500/30 shadow-2xl">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
        >
          <ChevronLeft size={20} />
          Previous
        </button>

        <div className="px-6 py-3 text-white font-bold text-lg">
          {currentSlide + 1} / {totalSlides}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
