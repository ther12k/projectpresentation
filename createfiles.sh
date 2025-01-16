# Create main directory structure
mkdir -p src/features/presentation/components/slides
mkdir -p src/features/presentation/components/shared
mkdir -p src/features/presentation/data
mkdir -p src/components/ui
mkdir -p src/styles

# Create slide components
touch src/features/presentation/components/slides/TitleSlide.jsx
touch src/features/presentation/components/slides/ProjectStatusSlide.jsx
touch src/features/presentation/components/slides/ChallengesSlide.jsx
touch src/features/presentation/components/slides/MonthlyPlanSlide.jsx
touch src/features/presentation/components/slides/WeeklyPlanSlide.jsx
touch src/features/presentation/components/slides/index.js

# Create shared components
touch src/features/presentation/components/shared/ProgressBar.jsx
touch src/features/presentation/components/PresentationControls.jsx

# Create presentation feature files
touch src/features/presentation/data/presentationData.js
touch src/features/presentation/ProjectPresentation.jsx

# Create UI components
touch src/components/ui/card.jsx

# Create main app files
touch src/styles/globals.css
touch src/App.jsx
touch src/main.jsx

# Verify the structure
tree src