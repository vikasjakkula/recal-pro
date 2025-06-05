import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import useAnimation from '../../hooks/useAnimation';
import Logo from '../Logo/Logo';
import './MainDashboard.css';

const MainDashboard = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [userData] = useState({
    name: 'vikasg63',
    predictedRank: 2847,
    latestScore: 247,
    improvement: 12,
    mockTests: 15,
    percentile: 94.6,
    studyStreak: 23,
    questionsSolved: 156,
    studyTime: 8.5
  });

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Close settings when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSettingsOpen && !event.target.closest('.settings-container')) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSettingsOpen]);

  // Animation hooks
  const baseAnim = useAnimation('fade-up', 0);
  const quickAnim = useAnimation('fade-up', 200);
  const statsAnim = useAnimation('fade-up', 400);
  const activityAnim = useAnimation('fade-up', 600);
  const ctaAnim = useAnimation('fade-up', 800);

  // Parallax effect for floating elements
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      document.querySelectorAll('.floating-circle').forEach((circle, index) => {
        if (circle) {
          circle.style.transform = `translateY(${rate * (index + 1) * 0.3}px) rotate(${scrolled * 0.1}deg)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (route, message) => {
    alert(message);
    navigate(route);
  };

  const actions = [
    {
      title: '⏱️ Start Mock Test',
      route: '/mock-test',
      message: `🎯 Starting JEE Main Mock Test #${userData.mockTests + 1}`,
      color: 'btn-mock-test'
    },
    {
      title: '📊 Analytics',
      route: '/analytics',
      message: `📊 Performance: ${userData.percentile}% percentile`,
      color: 'btn-analytics'
    },
    {
      title: '🎯 Practice',
      route: '/practice',
      message: '🎯 Starting practice session...',
      color: 'btn-practice'
    },
    {
      title: '🎥 Lectures',
      route: '/video-lectures',
      message: '🎥 Opening video lectures...',
      color: 'btn-lectures'
    }
  ];

  const mainStats = [
    { label: 'Predicted AIR', value: userData.predictedRank },
    { label: 'Latest Score', value: `${userData.latestScore}/300` },
    { label: 'Improvement', value: `+${userData.improvement}%`, isImprovement: true }
  ];

  const additionalContent = [
    {
      title: 'Performance Insights',
      text: 'Track your progress with detailed analytics. Understand your strengths and weaknesses across Physics, Chemistry, and Mathematics to optimize your preparation strategy.',
      link: '/analytics',
      linkText: 'View Detailed Analysis'
    },
    {
      title: 'Study Resources',
      text: 'Access comprehensive study materials, previous year papers, and expert-curated content to boost your JEE preparation and stay ahead of the competition.',
      link: '/resources',
      linkText: 'Explore Resources'
    },
    {
      title: 'Mock Test Series',
      text: 'Practice with full-length mock tests designed to simulate the actual JEE experience. Get instant feedback and detailed solutions for every question.',
      link: '/mock-tests',
      linkText: 'Take Mock Tests'
    },
    {
      title: 'Doubt Resolution',
      text: 'Get your doubts cleared by expert mentors. Ask questions, participate in discussions, and learn from peer interactions in our community platform.',
      link: '/doubts',
      linkText: 'Ask Doubts'
    }
  ];

  return (
    <div className={`dashboard-container min-h-screen relative overflow-x-hidden ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Background with blur */}
      <div className="fixed inset-0 bg-white/30 backdrop-blur-sm -z-10"></div>

      {/* Header with Logo */}
      <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <Logo size={40} className="logo-spin" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard</span>
            </a>
          </div>

          {/* Settings Button */}
          <div className="settings-container relative">
            <button 
              className="settings-button"
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              aria-label="Settings"
            >
              <svg 
                className={`w-6 h-6 ${isSettingsOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>

            {/* Settings Panel */}
            {isSettingsOpen && (
              <div className="settings-panel">
                <div className="settings-header">
                  <h3>Settings</h3>
                </div>
                <div className="settings-content">
                  <div className="theme-toggle">
                    <span>Theme</span>
                    <button 
                      className={`theme-switch ${isDarkMode ? 'dark' : 'light'}`}
                      onClick={toggleTheme}
                    >
                      <span className="theme-switch-handle"></span>
                      <span className="theme-icon">
                        {isDarkMode ? '🌙' : '☀️'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-12">
        {/* Main Stats */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos={statsAnim.type}
          data-aos-delay={statsAnim.delay}
          data-aos-duration={statsAnim.duration}
          data-aos-easing={statsAnim.easing}
          data-aos-once={statsAnim.once}
        >
          {mainStats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-gray-800 dark:text-gray-200 text-lg mb-4">{stat.label}</div>
              <div className={`text-4xl font-bold ${stat.isImprovement ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos={quickAnim.type}
          data-aos-delay={quickAnim.delay}
          data-aos-duration={quickAnim.duration}
          data-aos-easing={quickAnim.easing}
          data-aos-once={quickAnim.once}
        >
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(action.route, action.message)}
              className={`action-btn ${action.color} p-6 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3`}
            >
              {action.title}
            </button>
          ))}
        </div>

        {/* Additional Content */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos={activityAnim.type}
          data-aos-delay={activityAnim.delay}
          data-aos-duration={activityAnim.duration}
          data-aos-easing={activityAnim.easing}
          data-aos-once={activityAnim.once}
        >
          {additionalContent.map((content, index) => (
            <div key={index} className="content-card bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-white/40 rounded-2xl p-8 transform hover:scale-102 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{content.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{content.text}</p>
              <a 
                href={content.link}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2"
              >
                {content.linkText} →
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className="bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-white/40 rounded-2xl p-12 text-center"
          data-aos={ctaAnim.type}
          data-aos-delay={ctaAnim.delay}
          data-aos-duration={ctaAnim.duration}
          data-aos-easing={ctaAnim.easing}
          data-aos-once={ctaAnim.once}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Excel in JEE?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">Join our live classes and boost your preparation!</p>
          <button 
            onClick={() => handleNavigation('/live-class', '🎯 Joining live class...')}
            className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300 hover:bg-blue-700"
          >
            Join Live Class
          </button>
        </div>
      </main>
    </div>
  );
};

export default MainDashboard; 