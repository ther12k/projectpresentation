import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import { Settings, Server, Clock, CheckCircle, ShieldAlert } from 'lucide-react';

const DowntimeRundownSlide = ({ content }) => {
  return (
    <div className="p-8 bg-slate-50 min-h-full">
      <h2 className="text-4xl font-extrabold mb-4 text-center text-slate-800 flex items-center justify-center gap-3">
        <ShieldAlert className="w-10 h-10 text-amber-500" />
        {content.title}
      </h2>
      <p className="text-lg text-center text-slate-500 mb-10">{content.subtitle}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Settings className="w-6 h-6" />
              <span>Scope</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">{content.scope.description}</p>
            <ul className="space-y-2">
              {content.scope.affects.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Server className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Clock className="w-6 h-6" />
              <span>Step-by-Step Plan</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b bg-slate-50">
                    <th className="p-4 w-16 font-semibold text-slate-600">Step</th>
                    <th className="p-4 font-semibold text-slate-600">Description</th>
                    <th className="p-4 w-32 text-right font-semibold text-slate-600">Est. Time</th>
                  </tr>
                </thead>
                <tbody>
                  {content.plan.map((step, index) => (
                    <tr key={index} className="border-b hover:bg-slate-50">
                      <td className="p-4 font-bold text-slate-700 align-top">{step.step}</td>
                      <td className="p-4 text-slate-600">
                        <strong className="text-slate-800">{step.title}</strong>
                        <ul className="list-disc list-inside space-y-1 mt-1">
                          {step.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-4 text-right text-slate-500 align-top">{step.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Card className="inline-block bg-green-100 border-green-200 shadow-lg">
          <CardContent className="p-6">
            <p className="text-lg font-semibold text-green-800 flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6" />
              <span>Total Estimated Downtime: {content.totalDowntime}</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DowntimeRundownSlide;