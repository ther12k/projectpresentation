import React from 'react';
import { AlertCircle } from 'lucide-react';

const ChallengesSlide = ({ content }) => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Challenges & Risks</h2>
      <div className="space-y-6">
        {content.projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
            <div className="space-y-3">
              {project.challenges.map((challenge, challengeIndex) => (
                <div key={challengeIndex} className="flex items-start gap-3 bg-red-50 p-4 rounded">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengesSlide;