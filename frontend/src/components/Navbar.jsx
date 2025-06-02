import React, { useState } from 'react';
import { 
  HiSearch, 
  HiChevronDown, 
  HiKey, 
  HiUserCircle,
  HiPhone,
  HiMenu,
  HiX
} from 'react-icons/hi';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showExamsDropdown, setShowExamsDropdown] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // You can implement search logic here
    console.log('Searching for:', e.target.value);
  };

  const navItems = [
    { name: 'Quizzes', href: '#' },
    { name: 'Test Series', href: '#' },
    { name: 'Exam Info', href: '#' },
    { name: 'FAQs', href: '#' }
  ];

  const examOptions = [
    'EAMCET',
    'NEET',
    'JEE Main',
    'BITSAT',
    'AP EAPCET'
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="px-4 py-3">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end mb-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="BITSAT, Bank, MBA..."
              value={searchQuery}
              onChange={handleSearch}
            />
            {searchQuery && (
              <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                <p className="px-4 py-2 text-sm text-gray-500">
                  Searching for "{searchQuery}"...
                </p>
              </div>
            )}
          </div>

          {/* Center Navigation - Desktop */}
          <div className={`
            ${isMenuOpen ? 'block' : 'hidden'} 
            md:flex md:items-center md:space-x-4 md:flex-1 md:justify-center
          `}>
            {navItems.map((item) => (
              <button
                key={item.name}
                className="block w-full md:w-auto px-3 py-2 text-gray-700 hover:text-blue-600 font-medium hover:bg-gray-50 rounded-md"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className={`
            ${isMenuOpen ? 'block' : 'hidden'}
            md:flex md:items-center md:space-x-4
          `}>
            {/* Exams Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 w-full md:w-auto px-3 py-2"
                onClick={() => setShowExamsDropdown(!showExamsDropdown)}
              >
                <span>Exams</span>
                <HiChevronDown className={`h-5 w-5 transform transition-transform duration-200 ${showExamsDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {showExamsDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  {examOptions.map((exam) => (
                    <button
                      key={exam}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                      onClick={() => setShowExamsDropdown(false)}
                    >
                      {exam}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 w-full md:w-auto px-3 py-2">
              <HiKey className="h-5 w-5" />
              <span className="md:hidden lg:inline">Activation Key</span>
            </button>

            <div className="flex items-center space-x-2 text-gray-700 px-3 py-2">
              <HiUserCircle className="h-8 w-8" />
              <span className="md:hidden lg:inline font-medium">Vikas@G63 Amg</span>
            </div>

            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 w-full md:w-auto px-3 py-2">
              <HiPhone className="h-6 w-6" />
              <span className="md:hidden">Help</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 