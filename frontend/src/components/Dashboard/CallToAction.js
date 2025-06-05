import React from 'react';

const CallToAction = () => {
  return (
    <div className="mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 rounded-3xl shadow-xl overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="relative text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-100 mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto">
            Join our community of learners and start your educational journey today
          </p>
          <button className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-700">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction; 