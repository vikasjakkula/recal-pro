import React from 'react';

const TestimonialCard = ({ text, author, role }) => (
  <div className="bg-white rounded-2xl shadow-xl p-8 relative">
    <div className="absolute -top-4 left-8 text-6xl text-purple-500 opacity-50">"</div>
    <p className="text-gray-600 mb-6 relative z-10">{text}</p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
        {author[0]}
      </div>
      <div className="ml-4">
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="mb-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
        <p className="text-lg text-gray-600">Real feedback from real learners</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard
          text="The platform's interactive approach and comprehensive study materials helped me ace my EAMCET exam. The practice tests were particularly helpful!"
          author="Rahul Kumar"
          role="Engineering Student"
        />
        <TestimonialCard
          text="I love how the platform breaks down complex topics into easily digestible chunks. The visual learning aids and practice questions are fantastic."
          author="Priya Sharma"
          role="Medical Aspirant"
        />
        <TestimonialCard
          text="The mock tests and performance analytics helped me identify my weak areas and improve systematically. Highly recommended for serious EAMCET aspirants!"
          author="Arun Reddy"
          role="Top Scorer"
        />
      </div>
    </div>
  );
};

export default Testimonials; 