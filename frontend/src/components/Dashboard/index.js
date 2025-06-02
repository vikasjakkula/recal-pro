import React, { useEffect, useState } from 'react';
import TopSection from './TopSection';
import StatsSection from './StatsSection';
import GradientShowcase from './GradientShowcase';
import QuickActions from './QuickActions';
import StudentStats from './StudentStats';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from './Footer';
import Loading from '../Loading';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    setUserData(user);

    // Show loading animation for 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 w-full">
        <TopSection userData={userData} />
      </div>
      
      {/* Scrollable Content */}
      <div className="relative w-full">
        {/* Main Dashboard Content */}
        <main className="w-full py-8">
          <div className="grid grid-cols-1 gap-8 px-4">
            {/* Stats Cards Section */}
            <div className="bg-white shadow-lg p-6 w-full">
              <StatsSection />
            </div>

            {/* Gradient Showcase Section */}
            <div className="bg-white shadow-lg p-6 w-full">
              <GradientShowcase />
            </div>

            {/* Quick Actions Section */}
            <div className="bg-white shadow-lg p-6 w-full">
              <QuickActions />
            </div>

            {/* About Section (formerly StudentStats) */}
            <div className="w-full">
              <StudentStats />
            </div>

            {/* Testimonials Section */}
            <div className="bg-white shadow-lg p-6 w-full">
              <Testimonials />
            </div>

            {/* Call to Action Section */}
            <div className="w-full">
              <CallToAction />
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard; 