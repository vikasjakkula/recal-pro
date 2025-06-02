import React from 'react';

const StatCard = ({ title, value, change, gradient }) => (
  <div className={`rounded-2xl p-6 ${gradient} shadow-lg`}>
    <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
    <div className="flex items-end justify-between">
      <p className="text-white text-3xl font-bold">{value}</p>
      <p className={`text-green-300 flex items-center ${change.startsWith('-') ? 'text-red-300' : 'text-green-300'}`}>
        {change}
        <svg
          className={`w-4 h-4 ml-1 ${change.startsWith('-') ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </p>
    </div>
  </div>
);

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard
        title="Total Users"
        value="2,345"
        change="+12%"
        gradient="bg-gradient-to-r from-blue-500 to-indigo-600"
      />
      <StatCard
        title="Active Sessions"
        value="456"
        change="+5%"
        gradient="bg-gradient-to-r from-purple-500 to-pink-500"
      />
      <StatCard
        title="Revenue"
        value="$12,345"
        change="+23%"
        gradient="bg-gradient-to-r from-pink-500 to-rose-500"
      />
    </div>
  );
};

export default StatsSection; 