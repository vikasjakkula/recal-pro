import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MockTestCard from './MockTestCard';

const MockTestPage = () => {
  // Generate array of 5 test numbers
  const tests = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 md:ml-64 mt-16">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Mock Tests
                </h1>
                <p className="text-gray-600">
                  Practice with full-length mock tests to prepare for your exam
                </p>
              </div>

              {/* Quick Stats */}
              <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-4 py-3 shadow-sm">
                  <p className="text-sm text-gray-600">Available Tests</p>
                  <p className="text-2xl font-bold text-blue-600">5</p>
                </div>
                <div className="bg-white rounded-lg px-4 py-3 shadow-sm">
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">1</p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Overall Progress</span>
                <span className="text-blue-600 font-medium">20%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300"
                  style={{ width: '20%' }}
                />
              </div>
            </div>
          </div>

          {/* Test Cards */}
          <div className="space-y-4">
            {tests.map((testNumber) => (
              <div 
                key={testNumber}
                className="transform transition-all duration-300 hover:translate-x-2"
              >
                <MockTestCard
                  testNumber={testNumber}
                  isUnlocked={testNumber === 1}
                />
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="mt-8 bg-white rounded-lg p-4 shadow-sm">
            <p className="text-gray-600 text-sm">
              Complete the current test to unlock the next one in the series.
              Each test is designed to simulate the actual exam environment.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MockTestPage; 