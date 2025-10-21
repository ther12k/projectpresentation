import { useState, useRef } from "react";
import { projects } from "./data/presentationData21Oct";
import { supabaseSlideData } from "./data/supabaseSlideData";
import PresentationControls from "./components/PresentationControls";
import {
  TitleSlide,
  MonthlyPlanSlide,
  WeeklyPlanSlide,
  SupabaseSlide,
  DowntimeRundownSlide
} from "./components/slides";
import { Card } from "../../components/ui/card";
import ProjectStatusAndChallenges from "./components/slides/ProjectStatusAndChallenges";
import { dbChangeData } from "./data/presentationDataDbChange";
const ProjectPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const slides = [
    // Title Slide
    {
      type: "title",
      content: {
        title: "Project Status Updates",
        date: "21 Oktober 2025",
      },
    },

    // Project Status Slide
    {
      type: "projectStatus",
      content: {
        projects: projects.projectStatus,
      },
    },

    // Monthly Plan Slide
    {
      type: "monthlyPlan",
      content: {
        items: projects.monthlyPlan,
      },
    },

    // Weekly Plan Slide
    {
      type: "weeklyPlan",
      content: {
        plans: projects.weeklyPlan,
      },
    },
    {
      type: "downtimeRundown",
      content: dbChangeData,
    },
    // Supabase Architecture Slide
    {
      type: "supabase",
      content: supabaseSlideData,
    },
  ];

  const handleSlideChange = (newSlide) => {
    setCurrentSlide(newSlide);
    if (slideRef.current) {
      slideRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderSlide = (slide) => {
    switch (slide.type) {
      case "title":
        return <TitleSlide content={slide.content} />;
      case "projectStatus":
        return <ProjectStatusAndChallenges content={slide.content} />;
      case "monthlyPlan":
        return <MonthlyPlanSlide content={slide.content} />;
      case "weeklyPlan":
        return <WeeklyPlanSlide content={slide.content} />;
      case "supabase":
        return <SupabaseSlide content={slide.content} />;
      case "downtimeRundown":
        return <DowntimeRundownSlide content={slide.content} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 h-screen flex flex-col">
        {/* Header */}
        {/* <div className="mb-4">
          <h1 className="text-2xl font-semibold text-gray-700">Project Status Dashboard</h1>
          <div className="h-1 w-20 bg-blue-500 mt-2"></div>
        </div> */}

        {/* Main Content */}
        <Card className="flex-1 relative rounded-xl shadow-lg overflow-hidden bg-white border-0">
          {/* Slide Content with Custom Scrollbar */}
          <div
            ref={slideRef}
            className="absolute inset-0 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400"
            style={{
              scrollbarWidth: "thin",
              msOverflowStyle: "none",
            }}
          >
            <div className="min-h-full p-6">
              {renderSlide(slides[currentSlide])}
            </div>
          </div>
        </Card>

        {/* Navigation Controls */}
        <div className="mt-4">
          <PresentationControls
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onPrevious={() => handleSlideChange(Math.max(0, currentSlide - 1))}
            onNext={() =>
              handleSlideChange(Math.min(slides.length - 1, currentSlide + 1))
            }
          />
        </div>
      </div>

      {/* Custom CSS for Webkit Scrollbar */}
      <style>{`
        /* Webkit scrollbar styles */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #999;
        }

        /* Hide scrollbar for non-hover */
        .scrollbar-hide-default {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scrollbar-hide-default::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProjectPresentation;
