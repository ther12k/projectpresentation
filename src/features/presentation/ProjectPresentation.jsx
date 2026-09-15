import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { projects } from "./data/presentationDataToday";
import { projects as prevProjects } from "./data/presentationData01Sep";
import { supabaseSlideData } from "./data/supabaseSlideData";
import PresentationControls from "./components/PresentationControls";
import {
  TitleSlide,
  MonthlyPlanSlide,
  WeeklyPlanSlide,
  SupabaseSlide,
  DowntimeRundownSlide,
  UnfinishedProjectSlide,
  HighscopeRefactorSlide
} from "./components/slides";
import { Card } from "../../components/ui/card";
import ProjectStatusAndChallenges from "./components/slides/ProjectStatusAndChallenges";
import ProgressComparisonSlide from "./components/slides/ProgressComparisonSlide";
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
        title: `Unfinished: ${project.name || "Project"}`,
        content: { project },
      }));
  }, []);

  const baseSlides = useMemo(() => {
    return [
      {
        type: "title",
        title: "Title Cover",
        content: {
          title: "Project Status Updates",
          date: new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          projects: projects.projectStatus,
        },
      },
      {
        type: "projectStatus",
        title: "Portfolio Overview",
        content: {
          projects: projects.projectStatus,
        },
      },
      ...projects.projectStatus.map((project) => ({
        type: "progressComparison",
        title: `${project.name}`,
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
        title: "Monthly Targets",
        content: {
          items: projects.monthlyPlan,
        },
      },
      {
        type: "weeklyPlan",
        title: "Weekly Commitments",
        content: {
          plans: projects.weeklyPlan,
        },
      },
      ...(projects.highscopeRefactor ? [{
        type: "highscopeRefactor",
        title: "Highscope Refactor",
        content: {
          items: projects.highscopeRefactor,
        },
      }] : []),
    ];
  }, [unfinishedProjectSlides]);

  const downtimeSlide = useMemo(
    () => ({
      type: "downtimeRundown",
      title: "Downtime Rundown",
      content: dbChangeData,
    }),
    []
  );

  const supabaseArchitectureSlide = useMemo(
    () => ({
      type: "supabase",
      title: "Supabase Architecture",
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

      if (event.key === "ArrowRight" || event.key === " " || event.key === "PageDown") {
        event.preventDefault();
        goToNext();
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        goToPrevious();
      } else if (event.key === "Home") {
        event.preventDefault();
        handleSlideChange(0);
      } else if (event.key === "End") {
        event.preventDefault();
        handleSlideChange(slides.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrevious, handleSlideChange, slides.length]);

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
    <div className="min-h-screen bg-slate-100/70 pt-20 pb-4 sm:pb-6 px-3 sm:px-6 flex flex-col justify-between">
      <div className="max-w-7xl w-full mx-auto flex-1 flex flex-col h-[calc(100vh-6.5rem)]">
        {/* Main Presentation Slide Card */}
        <Card className="flex-1 relative rounded-2xl shadow-xl overflow-hidden bg-white border border-slate-200/80">
          {/* Slide Content with Custom Scrollbar */}
          <div
            ref={slideRef}
            className="absolute inset-0 overflow-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 hover:scrollbar-thumb-slate-400"
            style={{
              scrollbarWidth: "thin",
              msOverflowStyle: "none",
            }}
          >
            <div className="min-h-full p-6 sm:p-10 pb-16 sm:pb-24 flex flex-col justify-between">
              <div className="flex-1">
                {renderSlide(slides[currentSlide])}
              </div>
              {/* Bottom buffer to ensure content never touches the bottom edge */}
              <div className="h-10 sm:h-14 flex-shrink-0 w-full pointer-events-none" aria-hidden="true" />
            </div>
          </div>
        </Card>

        {/* Bottom Floating Navigation Controls */}
        <div className="mt-3.5 flex-shrink-0">
          <PresentationControls
            currentSlide={currentSlide}
            totalSlides={slides.length}
            slides={slides}
            onPrevious={goToPrevious}
            onNext={goToNext}
            onSelectSlide={handleSlideChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPresentation;
