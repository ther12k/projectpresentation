import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { projects } from "./data/presentationData28Jul";
import { projects as prevProjects } from "./data/presentationData30Jun";
import { supabaseSlideData } from "./data/supabaseSlideData";
import PresentationControls from "./components/PresentationControls";
import {
  TitleSlide,
  MonthlyPlanSlide,
  WeeklyPlanSlide,
  SupabaseSlide,
  DowntimeRundownSlide,
  UnfinishedProjectSlide,
  HighscopeRefactorSlide,
  ProgressComparisonSlide
} from "./components/slides";
import { Card } from "../../components/ui/card";
import ProjectStatusAndChallenges from "./components/slides/ProjectStatusAndChallenges";
import { dbChangeData } from "./data/old/presentationDataDbChange";
const ProjectPresentation = ({ variant = "dashboard" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const unfinishedProjectSlides = useMemo(() => {
    const sourceProjects = projects.unfinishedProjects ?? [];
    return sourceProjects
      .filter((project) => {
        if (typeof project.progress === "number") {
          return project.progress < 100;
        }
        if (project.status) {
          return project.status.toLowerCase() !== "completed";
        }
        return true;
      })
      .map((project) => ({
        type: "unfinishedProject",
        content: { project },
      }));
  }, []);

  const baseSlides = useMemo(() => {
    return [
      {
        type: "title",
        content: {
          title: "Project Status Updates",
          date: "28 July 2026",
        },
      },
      {
        type: "projectStatus",
        content: {
          projects: projects.projectStatus,
        },
      },
      ...projects.projectStatus.map((project) => ({
        type: "progressComparison",
        content: {
          project,
          prevProject: prevProjects.projectStatus.find(
            (p) => p.name === project.name
          ),
        },
      })),
      ...unfinishedProjectSlides,
      {
        type: "monthlyPlan",
        content: {
          items: projects.monthlyPlan,
        },
      },
      {
        type: "weeklyPlan",
        content: {
          plans: projects.weeklyPlan,
        },
      },
      ...(projects.highscopeRefactor ? [{
        type: "highscopeRefactor",
        content: {
          items: projects.highscopeRefactor,
        },
      }] : []),
    ];
  }, [unfinishedProjectSlides]);

  const downtimeSlide = useMemo(
    () => ({
      type: "downtimeRundown",
      content: dbChangeData,
    }),
    []
  );

  const supabaseArchitectureSlide = useMemo(
    () => ({
      type: "supabase",
      content: supabaseSlideData,
    }),
    []
  );

  const slides = useMemo(() => {
    switch (variant) {
      case "downtime":
        return [downtimeSlide];
      case "supabase":
        return [supabaseArchitectureSlide];
      default:
        return baseSlides;
    }
  }, [baseSlides, downtimeSlide, supabaseArchitectureSlide, variant]);

  useEffect(() => {
    setCurrentSlide(0);
    if (slideRef.current) {
      slideRef.current.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [variant]);

  const handleSlideChange = useCallback((newSlide) => {
    setCurrentSlide(newSlide);
    if (slideRef.current) {
      slideRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const goToPrevious = useCallback(() => {
    handleSlideChange(Math.max(0, currentSlide - 1));
  }, [currentSlide, handleSlideChange]);

  const goToNext = useCallback(() => {
    handleSlideChange(Math.min(slides.length - 1, currentSlide + 1));
  }, [currentSlide, handleSlideChange, slides.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;
      const isTypingElement =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (isTypingElement) {
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrevious]);

  const renderSlide = (slide) => {
    if (!slide) {
      return null;
    }
    switch (slide.type) {
      case "title":
        return <TitleSlide content={slide.content} />;
      case "projectStatus":
        return <ProjectStatusAndChallenges content={slide.content} />;
      case "progressComparison":
        return <ProgressComparisonSlide content={slide.content} />;
      case "unfinishedProject":
        return <UnfinishedProjectSlide content={slide.content} />;
      case "monthlyPlan":
        return <MonthlyPlanSlide content={slide.content} />;
      case "weeklyPlan":
        return <WeeklyPlanSlide content={slide.content} />;
      case "supabase":
        return <SupabaseSlide content={slide.content} />;
      case "downtimeRundown":
        return <DowntimeRundownSlide content={slide.content} />;
      case "highscopeRefactor":
        return <HighscopeRefactorSlide content={slide.content} />;
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
            onPrevious={goToPrevious}
            onNext={goToNext}
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
