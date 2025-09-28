import React from 'react';
import { Phone, User, BookOpen, Lightbulb, PhoneCall } from 'lucide-react';

const CallAssistant: React.FC = () => {
  const transcript = [
    { speaker: 'Customer', time: '14:32', text: 'Hi, I\'m calling about my recent order #12345. I haven\'t received it yet.' },
    { speaker: 'Sarah', time: '14:32', text: 'Hello! I\'d be happy to help you track your order. Let me look that up for you.' },
    { speaker: 'Customer', time: '14:33', text: 'I placed it last Wednesday and paid for express shipping. I was expecting it yesterday.' },
    { speaker: 'Sarah', time: '14:33', text: 'I understand your concern. Let me check the tracking details and see what might have happened.' },
    { speaker: 'Customer', time: '14:34', text: 'This is really frustrating. I needed this for an important meeting today.' },
    { speaker: 'Sarah', time: '14:34', text: 'I completely understand your frustration. Let me see what we can do to resolve this immediately.' },
  ];

  const customerDetails = {
    name: 'Michael Johnson',
    email: 'michael.johnson@email.com',
    phone: '+1 (555) 123-4567',
    tier: 'Premium',
    orderHistory: '23 orders',
    lastContact: '2 weeks ago',
  };

  const knowledgeArticles = [
    {
      title: 'Express Shipping Delays - Common Causes',
      relevance: 98,
      summary: 'Weather delays and carrier capacity issues in the Northeast region...',
    },
    {
      title: 'Order Tracking and Status Updates',
      relevance: 95,
      summary: 'How to provide accurate tracking information and set expectations...',
    },
    {
      title: 'Refund and Replacement Options',
      relevance: 89,
      summary: 'When to offer refunds vs. replacements for delayed orders...',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Call Assistant</h1>
        <p className="text-gray-600">Real-time assistance during customer calls</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
        {/* Left Side - Call Transcript */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center space-x-2">
            <PhoneCall size={20} className="text-green-500" />
            <h3 className="text-lg font-semibold text-gray-900">Call Transcript</h3>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Live</span>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {transcript.map((message, index) => (
              <div key={index} className={`flex ${message.speaker === 'Sarah' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-sm px-4 py-2 rounded-lg ${
                  message.speaker === 'Sarah' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-medium">
                      {message.speaker}
                    </span>
                    <span className="text-xs opacity-75">
                      {message.time}
                    </span>
                  </div>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="text-sm text-gray-500 text-center">
              🎤 Listening... Agent suggestions will appear in real-time
            </div>
          </div>
        </div>

        {/* Right Side - Agent Actions Panel */}
        <div className="space-y-6">
          {/* Customer Details */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <User size={20} className="text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900">Customer Details</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">{customerDetails.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium text-sm">{customerDetails.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phone:</span>
                <span className="font-medium">{customerDetails.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tier:</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  {customerDetails.tier}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order History:</span>
                <span className="font-medium">{customerDetails.orderHistory}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Contact:</span>
                <span className="font-medium">{customerDetails.lastContact}</span>
              </div>
            </div>
          </div>

          {/* Knowledge Base Articles */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen size={20} className="text-green-500" />
              <h3 className="text-lg font-semibold text-gray-900">Knowledge Base</h3>
            </div>
            <div className="space-y-4">
              {knowledgeArticles.map((article, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-800">{article.title}</h4>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {article.relevance}% match
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{article.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Best Action */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Lightbulb size={20} className="text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Next Best Action</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium text-orange-800">Immediate Action Suggested</span>
                </div>
                <p className="text-sm text-orange-700 mb-3">
                  Offer expedited shipping refund + 20% discount for future order due to Premium tier status and shipping delay.
                </p>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-orange-600 text-white text-xs rounded hover:bg-orange-700">
                    Apply Suggested Resolution
                  </button>
                  <button className="px-3 py-1 bg-white text-orange-600 border border-orange-600 text-xs rounded hover:bg-orange-50">
                    View Alternatives
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallAssistant;