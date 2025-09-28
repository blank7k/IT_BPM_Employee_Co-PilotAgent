import React from 'react';
import { Eye, CheckCircle, Clock, Repeat } from 'lucide-react';

const AgentSuggestions: React.FC = () => {
  const suggestions = [
    {
      id: 1,
      title: 'Automate Claim ID Copying',
      description: 'I noticed you repeat copying Claim ID 20 times per day. I can automate this process and save you 15 minutes daily.',
      timesSaved: '15 min/day',
      confidence: 95,
      type: 'automation',
      impact: 'high',
    },
    {
      id: 2,
      title: 'Email Template Optimization',
      description: 'Your customer follow-up emails follow a similar pattern. I can create smart templates with auto-fill capabilities.',
      timesSaved: '25 min/day',
      confidence: 88,
      type: 'template',
      impact: 'medium',
    },
    {
      id: 3,
      title: 'Data Validation Shortcut',
      description: 'I detected a recurring data validation sequence. I can create a one-click validation script for your spreadsheets.',
      timesSaved: '10 min/day',
      confidence: 92,
      type: 'validation',
      impact: 'medium',
    },
    {
      id: 4,
      title: 'Report Generation Assistant',
      description: 'Your monthly reports share 80% similar structure. I can pre-populate sections and auto-fetch recurring data points.',
      timesSaved: '2 hours/month',
      confidence: 90,
      type: 'reporting',
      impact: 'high',
    },
    {
      id: 5,
      title: 'Calendar Smart Scheduling',
      description: 'I can optimize your meeting patterns by suggesting better time slots based on your productivity patterns.',
      timesSaved: '30 min/week',
      confidence: 78,
      type: 'scheduling',
      impact: 'low',
    },
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-orange-600 bg-orange-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'automation':
        return <Repeat size={20} />;
      case 'template':
        return <Clock size={20} />;
      default:
        return <CheckCircle size={20} />;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Agent Suggestions</h1>
        <p className="text-gray-600">AI-powered recommendations to boost your productivity</p>
      </div>

      <div className="space-y-6">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  {getTypeIcon(suggestion.type)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {suggestion.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {suggestion.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} className="text-gray-400" />
                      <span className="text-gray-600">Saves: {suggestion.timesSaved}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className={`w-2 h-2 rounded-full ${suggestion.confidence > 90 ? 'bg-green-500' : 
                        suggestion.confidence > 80 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                      <span className="text-gray-600">{suggestion.confidence}% confidence</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(suggestion.impact)}`}>
                      {suggestion.impact.toUpperCase()} IMPACT
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3 pt-4 border-t border-gray-100">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <Eye size={16} />
                <span className="font-medium">Preview Script</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                <CheckCircle size={16} />
                <span className="font-medium">Approve & Run</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentSuggestions;