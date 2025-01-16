import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PresentationControls = ({ currentSlide, totalSlides, onPrevious, onNext }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-t">
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <span className="text-sm font-medium">
        Slide {currentSlide + 1} of {totalSlides}
      </span>
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PresentationControls;