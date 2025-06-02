import React, { useState } from 'react';
import { HiLockClosed, HiClock, HiQuestionMarkCircle, HiAcademicCap } from 'react-icons/hi';

const MockTestCard = ({ 
  testNumber, 
  isUnlocked = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    { icon: HiQuestionMarkCircle, text: '160 Questions' },
    { icon: HiAcademicCap, text: '160 Marks' },
    { icon: HiClock, text: '180 Min' }
  ];

  return (
    <div 
      className={`
        p-6 rounded-xl shadow-md transition-all duration-300
        ${isHovered ? 'transform -translate-y-1 shadow-lg' : ''}
        ${testNumber === 1 ? 'bg-gradient-to-r from-blue-50 to-blue-100' : 'bg-gradient-to-r from-red-50 to-red-100'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg font-semibold text-gray-800">
              TS EAMCET Engineering Mock Test - {testNumber}
            </h3>
            {!isUnlocked && (
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                Locked
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="mt-3 flex flex-wrap items-center gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="flex items-center space-x-1 text-gray-600"
              >
                <stat.icon className="h-4 w-4" />
                <span className="text-sm">{stat.text}</span>
              </div>
            ))}
          </div>

          {/* Progress Bar (only for unlocked test) */}
          {isUnlocked && (
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Previous attempt</span>
                <span className="text-blue-600 font-medium">75/160</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full transition-all duration-300"
                  style={{ width: '47%' }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Exam Tag */}
          <div className={`
            w-12 h-12 rounded-full flex items-center justify-center
            transition-all duration-300
            ${isUnlocked 
              ? 'bg-blue-100 text-blue-600' 
              : 'bg-gray-100 text-gray-600'
            }
          `}>
            <span className="font-medium text-lg">E</span>
          </div>

          {/* Action Button */}
          <button
            className={`
              px-6 py-3 rounded-lg flex items-center space-x-2
              transition-all duration-300 font-medium
              ${isUnlocked 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700' 
                : 'bg-gray-100 text-gray-500 cursor-not-allowed hover:bg-gray-200'
              }
              ${isHovered && isUnlocked ? 'transform scale-105' : ''}
            `}
            disabled={!isUnlocked}
          >
            {isUnlocked ? (
              <>
                <span>Re-attempt</span>
                <span className="text-blue-200">→</span>
              </>
            ) : (
              <>
                <HiLockClosed className="h-5 w-5" />
                <span>Unlock</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockTestCard; 