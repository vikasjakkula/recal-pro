import React from 'react';

const ActionButton = ({ title, gradient, icon }) => (
  <button
    className={`${gradient} w-full text-white font-semibold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3`}
  >
    {icon}
    <span>{title}</span>
  </button>
);

const QuickActions = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ActionButton
          title="Create New Project"
          gradient="bg-gradient-to-r from-blue-600 to-purple-600"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
        <ActionButton
          title="View Analytics"
          gradient="bg-gradient-to-r from-pink-500 to-pink-600"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 0v10h10V3H5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M15 7a1 1 0 01-1 1h-3a1 1 0 110-2h3a1 1 0 011 1zm-4 3a1 1 0 01-1 1H7a1 1 0 110-2h3a1 1 0 011 1z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
        <ActionButton
          title="Team Settings"
          gradient="bg-gradient-to-r from-red-500 to-blue-500"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default QuickActions; 