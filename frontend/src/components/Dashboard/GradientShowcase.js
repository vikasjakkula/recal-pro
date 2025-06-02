import React from 'react';

const GradientButton = ({ step, gradient }) => (
  <button
    className={`${gradient} text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
  >
    Gradient Step {step}
  </button>
);

const GradientShowcase = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Color Gradient Showcase</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <GradientButton
          step={1}
          gradient="bg-gradient-to-r from-blue-900 to-blue-700"
        />
        <GradientButton
          step={2}
          gradient="bg-gradient-to-r from-blue-700 to-indigo-600"
        />
        <GradientButton
          step={3}
          gradient="bg-gradient-to-r from-indigo-600 to-purple-600"
        />
        <GradientButton
          step={4}
          gradient="bg-gradient-to-r from-purple-600 to-pink-500"
        />
        <GradientButton
          step={5}
          gradient="bg-gradient-to-r from-pink-500 to-pink-400"
        />
      </div>
    </div>
  );
};

export default GradientShowcase; 