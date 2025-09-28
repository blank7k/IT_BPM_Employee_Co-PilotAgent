import React from 'react';
import { Play, Eye, Clock, CheckCircle } from 'lucide-react';

const Tasks: React.FC = () => {
  const tasks = [
    {
      id: 'T001',
      name: 'Process customer refund request',
      system: 'Salesforce',
      status: 'pending',
      suggestion: 'Auto-fill customer details from previous cases',
    },
    {
      id: 'T002', 
      name: 'Update inventory records',
      system: 'ERP System',
      status: 'in_progress',
      suggestion: 'Bulk update suggested for similar items',
    },
    {
      id: 'T003',
      name: 'Generate monthly report',
      system: 'Analytics Dashboard',
      status: 'pending',
      suggestion: 'Template available from last month',
    },
    {
      id: 'T004',
      name: 'Customer follow-up call',
      system: 'Phone System',
      status: 'scheduled',
      suggestion: 'Talking points prepared based on case history',
    },
    {
      id: 'T005',
      name: 'Data entry validation',
      system: 'Internal DB',
      status: 'pending',
      suggestion: 'Pattern detected - automation recommended',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      case 'scheduled':
        return 'bg-purple-100 text-purple-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock size={16} />;
      case 'in_progress':
        return <Play size={16} />;
      case 'completed':
        return <CheckCircle size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Tasks Management</h1>
        <p className="text-gray-600">Manage your daily tasks with AI-powered assistance</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Today's Tasks</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Task ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Task Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  System Used
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agent Suggestion
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {task.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {task.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {task.system}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                      {getStatusIcon(task.status)}
                      <span className="capitalize">{task.status.replace('_', ' ')}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                    <div className="truncate">{task.suggestion}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                      <Play size={14} />
                      <span>Start Task</span>
                    </button>
                    <button className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200">
                      <Eye size={14} />
                      <span>Let Agent Observe</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tasks;