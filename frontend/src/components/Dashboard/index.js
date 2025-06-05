import React from 'react';
import Header from './Header';
import MainDashboard from './MainDashboard';
import Features from './Features';
import CallToAction from './CallToAction';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Header />
      <div className="w-full px-4">
        <MainDashboard />
        <Features />
        <CallToAction />
      </div>
    </div>
  );
};

export default Dashboard; 