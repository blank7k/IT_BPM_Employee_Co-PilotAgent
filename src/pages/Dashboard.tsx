import React from 'react';
import { CheckSquare, Zap, TrendingUp, Heart } from 'lucide-react';

const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: 'Tasks Today',
      value: '12',
      subtitle: 'pending',
      icon: CheckSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Automations Active',
      value: '3',
      subtitle: 'scripts running',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Efficiency Gain',
      value: '+18%',
      subtitle: 'this week',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Wellness Status',
      value: 'Normal',
      subtitle: 'stress level',
      icon: Heart,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Your daily productivity insights and agent assistance summary</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                <metric.icon size={24} className={metric.color} />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                {metric.title}
              </h3>
              <div className="flex items-baseline space-x-2">
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-sm text-gray-500">{metric.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Agent Activity</h3>
        <div className="space-y-4">
          {[
            { time: '10:30 AM', action: 'Automated customer email response', status: 'completed' },
            { time: '11:45 AM', action: 'Suggested task prioritization update', status: 'pending' },
            { time: '1:15 PM', action: 'Identified repetitive data entry pattern', status: 'review' },
            { time: '2:30 PM', action: 'Wellness check: recommended 10-minute break', status: 'acknowledged' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-500 w-16">{activity.time}</div>
                <div className="text-sm text-gray-800">{activity.action}</div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                activity.status === 'review' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;