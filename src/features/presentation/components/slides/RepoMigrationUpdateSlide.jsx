import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import { GitBranch, FileText, ExternalLink, CheckCircle } from 'lucide-react';

const RepoMigrationUpdateSlide = ({ content }) => {
  return (
    <div className="p-8 bg-slate-50 min-h-full">
      <h2 className="text-4xl font-extrabold mb-4 text-center text-slate-800 flex items-center justify-center gap-3">
        <GitBranch className="w-10 h-10 text-purple-500" />
        {content.title}
      </h2>
      <p className="text-lg text-center text-slate-500 mb-10">{content.subtitle}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <FileText className="w-6 h-6" />
              <span>Migration Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {content.details.map((item, idx) => (
                <li key={idx} className="text-slate-700">{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <ExternalLink className="w-6 h-6" />
              <span>Progress Tracker</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href={content.sheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Google Sheet: Migration Progress
            </a>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Card className="inline-block bg-green-100 border-green-200 shadow-lg">
          <CardContent className="p-6">
            <p className="text-lg font-semibold text-green-800 flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6" />
              <span>{content.status}</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RepoMigrationUpdateSlide;