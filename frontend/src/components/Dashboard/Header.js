import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const showProfile = () => {
    alert('👤 Student Profile\n\n📋 Account Details:\n• Name: Vikas G\n• Target: IIT Bombay CSE\n• JEE 2025 Aspirant\n• Premium Member\n\nOpening profile settings...');
    setShowProfileMenu(false);
  };

  return (
    <div className={`sticky top-0 z-50 backdrop-blur-md bg-white/10 dark:bg-gray-900/50 shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              RecallPro
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('/dashboard')} className="text-white/90 hover:text-white transition-colors">
              Dashboard
            </button>
            <button onClick={() => navigate('/mock-tests')} className="text-white/90 hover:text-white transition-colors">
              Mock Tests
            </button>
            <button onClick={() => navigate('/analytics')} className="text-white/90 hover:text-white transition-colors">
              Analytics
            </button>
            <button onClick={() => navigate('/resources')} className="text-white/90 hover:text-white transition-colors">
              Resources
            </button>
          </div>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-4 py-2 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              <div className="text-right">
                <div className="font-semibold text-white">vikasg63</div>
                <div className="text-xs text-blue-200">JEE 2025 Aspirant</div>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
                👤
              </div>
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-2 z-50">
                <button
                  onClick={showProfile}
                  className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  View Profile
                </button>
                <button
                  onClick={toggleTheme}
                  className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
                <button
                  onClick={() => navigate('/settings')}
                  className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Settings
                </button>
                <hr className="my-2 border-gray-200 dark:border-gray-700" />
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 