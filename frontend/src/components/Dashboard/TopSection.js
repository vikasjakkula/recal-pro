import React from 'react';
import { useNavigate } from 'react-router-dom';
import userIcon from '../user.png';
import mailIcon from '../mail.png';
import Settings from './Settings';

const TopSection = ({ userData }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm w-full">
      <div className="w-full px-6 py-6">
        <div className="flex items-center justify-between">
          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-700">
                <img
                  src={userIcon}
                  alt="User"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Welcome back, {userData?.username || 'User'}!
              </h1>
              <div className="flex items-center mt-1 text-gray-500 dark:text-gray-400">
                <img src={mailIcon} alt="Email" className="w-4 h-4 mr-2" />
                <span>{userData?.email || 'user@example.com'}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Settings />
            <button
              onClick={handleLogout}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              title="Logout"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection; 