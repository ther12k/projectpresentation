import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/card';
import { Database, Unlock, DollarSign, Settings, Shield, WifiOff, Server, LayoutDashboard, KeyRound, ArrowRight, Rss, Box, GitBranch } from 'lucide-react';

const icons = {
  Database: <Database className="w-6 h-6 text-green-500" />,
  Unlock: <Unlock className="w-6 h-6 text-green-500" />,
  DollarSign: <DollarSign className="w-6 h-6 text-green-500" />,
  Settings: <Settings className="w-6 h-6 text-green-500" />,
  Shield: <Shield className="w-6 h-6 text-green-500" />,
  WifiOff: <WifiOff className="w-6 h-6 text-green-500" />,
};

const archIcons = {
    "PostgreSQL Database": <Database className="w-8 h-8 text-blue-500" />,
    "Studio Dashboard": <LayoutDashboard className="w-8 h-8 text-indigo-500" />,
    "GoTrue (Auth)": <KeyRound className="w-8 h-8 text-red-500" />,
    "PostgREST (API)": <ArrowRight className="w-8 h-8 text-purple-500" />,
    "Realtime Engine": <Rss className="w-8 h-8 text-teal-500" />,
    "Storage": <Box className="w-8 h-8 text-orange-500" />,
    "Kong API Gateway": <GitBranch className="w-8 h-8 text-gray-500" />,
}

const SupabaseSlide = ({ content }) => {
  return (
    <div className="p-8 bg-gray-50 min-h-full">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{content.title}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-700">{content.architecture.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-600 mb-6">{content.architecture.description}</p>
            <div className="space-y-4">
              {content.architecture.components.map((component, index) => (
                <div key={index} className="flex items-start gap-4 p-3 bg-white rounded-lg border">
                  <div className="flex-shrink-0 mt-1">
                    {archIcons[component.name] || <Server className="w-8 h-8 text-gray-400" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{component.name}</h4>
                    <p className="text-sm text-gray-500">{component.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-700">{content.benefits.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-5">
              {content.benefits.items.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                   <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
                      {icons[benefit.icon] || <Database className="w-6 h-6 text-green-500" />}
                   </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{benefit.name}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
SupabaseSlide.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    architecture: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      components: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    benefits: PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default SupabaseSlide;
