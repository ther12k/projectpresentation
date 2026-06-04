# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Package Management
- `yarn install` - Install dependencies (preferred package manager)
- `npm install` - Alternative with npm

### Development
- `yarn dev` - Start development server with hot reload
- `yarn build` - Build for production
- `yarn preview` - Preview production build locally
- `yarn lint` - Run ESLint for code quality checks

### Testing
No test framework is currently configured. Consider adding React Testing Library or Jest for unit testing.

## Application Architecture

This is a **React-based multi-modal presentation dashboard** built with Vite, featuring different viewing modes for project management and strategic presentations.

### Core Application Flow
- **App.jsx** - Central routing hub with floating navigation menu
- **Two Presentation Systems:**
  - Legacy SWOT presentation system (`src/components/Presentation.jsx`)
  - Modern project dashboard (`src/features/presentation/ProjectPresentation.jsx`)

### View Modes
The application supports four distinct presentation modes, switched via a floating navigation menu:

1. **SWOT Presentation** (`swot`) - Corporate strategic analysis slides
2. **Project Report** (`project-report`) - Dashboard with project status, monthly/weekly plans
3. **Downtime Rundown** (`downtime`) - Specialized operational downtime analysis
4. **Supabase Architecture** (`supabase`) - Technical architecture documentation

### Key Architectural Patterns

#### Variant-Based Content Rendering
The `ProjectPresentation` component uses a `variant` prop to dynamically render different content sets:
```javascript
// Variant determines which data slides to render
<ProjectPresentation variant="dashboard|downtime|supabase" />
```

#### Feature-Based Structure
- **`src/features/presentation/`** - Modern presentation system with slide components
- **`src/components/`** - Reusable UI components and legacy presentation system
- **`src/features/presentation/data/`** - Date-specific project data files (20+ variants from Jul-Nov 2025)

#### Slide Component System
Slides are rendered using a type-based system:
```javascript
const slideTypes = {
  title: TitleSlide,
  projectStatus: ProjectStatusAndChallenges,
  unfinishedProject: UnfinishedProjectSlide,
  monthlyPlan: MonthlyPlanSlide,
  weeklyPlan: WeeklyPlanSlide,
  supabase: SupabaseSlide,
  downtimeRundown: DowntimeRundownSlide
}
```

### Data Management
- **Historical Data:** 20+ presentation data files with dates (e.g., `presentationData20nov.js`)
- **Project Tracking:** Real-time project status with progress percentages, task assignments, timeline visualization
- **Content Variants:** Different data sets for dashboard, downtime, and supabase views

### State Management
- **React Hooks-based:** Uses `useState`, `useMemo`, `useCallback` throughout
- **Local Component State:** No global state management library
- **Keyboard Navigation:** Arrow key navigation between slides
- **Persistent View State:** Navigation menu maintains open/closed state

### UI/UX Features
- **Particle Backgrounds:** Animated visual effects in legacy presentation
- **Gradient Styling:** Blue-to-purple gradient themes throughout
- **Custom Scrollbars:** Styled scrollbars using Tailwind Scrollbar plugin
- **Responsive Design:** Mobile-optimized with Tailwind breakpoints
- **Transition Effects:** Smooth animations and state transitions

### Technology Stack
- **React 18.3.1** - Functional components with hooks
- **Vite 6.0.5** - Build tool and development server
- **Tailwind CSS 3.4.17** - Utility-first styling with custom scrollbar plugin
- **Lucide React** - Icon library for navigation and UI

### Development Notes
- Uses Yarn 1.22.22 as the preferred package manager
- ESLint configured with React-specific rules
- PostCSS configuration for Tailwind processing
- ES modules (`"type": "module"`)
- No TypeScript - plain JavaScript with JSX

### File Organization Patterns
- **Feature-based** for modern presentation system
- **Component-based** for reusable UI elements
- **Data files** organized by date for historical tracking
- **Slide components** modular and reusable across different presentation types

When working with this codebase:
1. Check which presentation variant you're working with (dashboard/downtime/supabase)
2. Data files are date-specific - use the most recent for current features
3. The legacy and modern systems coexist - be clear which you're modifying
4. Navigation state is managed in App.jsx and affects the entire application flow