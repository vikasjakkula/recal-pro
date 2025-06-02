import React, { useState, useEffect } from 'react';
import { HiMenu, HiChevronRight } from 'react-icons/hi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Mock Tests');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const menuItems = [
    {
      name: 'Mock Tests',
      count: 5,
      description: 'Full-length practice tests'
    },
    {
      name: 'Sectional Tests',
      count: 12,
      description: 'Topic-wise practice'
    },
    {
      name: 'Previous Year Paper',
      count: 8,
      description: 'Past exam papers'
    }
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(true);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar on mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobile && isOpen && !e.target.closest('.sidebar-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiMenu className="h-6 w-6 text-gray-700" />
      </button>

      {/* Sidebar */}
      <div 
        className={`
          sidebar-container fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:pt-16 md:w-64
        `}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Test Series</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <div key={item.name} className="group">
                <button
                  className={`
                    w-full text-left p-3 rounded-lg transition-all duration-200
                    flex items-center justify-between
                    ${activeItem === item.name 
                      ? 'bg-blue-100 text-red-600 font-bold shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                  onClick={() => setActiveItem(item.name)}
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      <span className={`
                        text-sm px-2 py-1 rounded-full
                        ${activeItem === item.name 
                          ? 'bg-red-100' 
                          : 'bg-gray-100'
                        }
                      `}>
                        {item.count}
                      </span>
                    </div>
                    <p className={`
                      text-sm mt-1 transition-all duration-200
                      ${activeItem === item.name 
                        ? 'text-red-500' 
                        : 'text-gray-500'
                      }
                    `}>
                      {item.description}
                    </p>
                  </div>
                  <HiChevronRight className={`
                    h-5 w-5 transform transition-transform duration-200
                    ${activeItem === item.name ? 'rotate-90' : ''}
                  `} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar; 