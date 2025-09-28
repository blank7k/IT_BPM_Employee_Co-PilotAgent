import React from 'react';
import { Heart, TrendingUp, Coffee, ArrowRight } from 'lucide-react';

const Wellness: React.FC = () => {
  const currentStress = 'Green'; // Green, Yellow, Red
  const stressHistory = [
    { day: 'Mon', level: 2 },
    { day: 'Tue', level: 3 },
    { day: 'Wed', level: 4 },
    { day: 'Thu', level: 3 },
    { day: 'Fri', level: 2 },
    { day: 'Today', level: 2 },
  ];

  const wellnessMetrics = [
    { label: 'Average Daily Stress', value: '2.8/5', trend: 'down', color: 'text-green-600' },
    { label: 'Break Compliance', value: '85%', trend: 'up', color: 'text-blue-600' },
    { label: 'Productive Hours', value: '6.2h', trend: 'up', color: 'text-purple-600' },
    { label: 'Task Satisfaction', value: '4.1/5', trend: 'stable', color: 'text-orange-600' },
  ];

  const getStressColor = (stress: string) => {
    switch (stress.toLowerCase()) {
      case 'green':
        return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' };
      case 'yellow':
        return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' };
      case 'red':
        return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200' };
    }
  };

  const stressColors = getStressColor(currentStress);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Wellness Dashboard</h1>
        <p className="text-gray-600">Monitor your well-being and get AI-powered wellness recommendations</p>
      </div>

      {/* Current Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp size={20} className="text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900">Stress Level Trend</h3>
          </div>
          
          {/* Chart Placeholder */}
          <div className="h-64 bg-gray-50 rounded-lg p-4 flex items-end justify-between">
            {stressHistory.map((day, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div 
                  className={`w-8 rounded-t ${
                    day.level <= 2 ? 'bg-green-400' : 
                    day.level <= 3 ? 'bg-yellow-400' : 
                    'bg-red-400'
                  }`}
                  style={{ height: `${day.level * 20}px` }}
                ></div>
                <span className="text-xs text-gray-500">{day.day}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p>Your stress levels have been improving this week. Keep up the good work!</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Current Stress Indicator */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Heart size={20} className="text-red-500" />
              <h3 className="text-lg font-semibold text-gray-900">Current Status</h3>
            </div>
            <div className={`p-4 rounded-lg ${stressColors.bg} ${stressColors.border} border`}>
              <div className="text-center">
                <div className={`text-2xl font-bold ${stressColors.text} mb-1`}>
                  {currentStress.toUpperCase()}
                </div>
                <div className="text-sm text-gray-600">Stress Level</div>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              Last updated: 2 minutes ago
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <div className="flex items-center space-x-2">
                  <Coffee size={16} />
                  <span className="text-sm font-medium">Suggest Break</span>
                </div>
                <ArrowRight size={16} />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors duration-200">
                <div className="flex items-center space-x-2">
                  <ArrowRight size={16} />
                  <span className="text-sm font-medium">Auto-route Next Simple Task</span>
                </div>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wellness Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {wellnessMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {metric.label}
              </h4>
              <div className={`flex items-center space-x-1 ${metric.color}`}>
                {metric.trend === 'up' && <TrendingUp size={14} />}
                {metric.trend === 'down' && <TrendingUp size={14} className="transform rotate-180" />}
              </div>
            </div>
            <div className={`text-2xl font-bold ${metric.color}`}>
              {metric.value}
            </div>
          </div>
        ))}
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Wellness Recommendations</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <h4 className="text-sm font-medium text-blue-800 mb-1">Schedule Pattern Optimization</h4>
              <p className="text-sm text-blue-700">
                You're most productive between 10-11 AM. I suggest scheduling complex tasks during this window and routine tasks later.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <h4 className="text-sm font-medium text-green-800 mb-1">Break Reminder Success</h4>
              <p className="text-sm text-green-700">
                Your stress levels drop significantly after 10-minute breaks. Continue taking regular breaks every 90 minutes.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <h4 className="text-sm font-medium text-purple-800 mb-1">Task Variety Recommendation</h4>
              <p className="text-sm text-purple-700">
                Alternating between analytical and creative tasks could improve your overall satisfaction and reduce mental fatigue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wellness;