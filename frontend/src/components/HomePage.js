import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const AboutModal = () => (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl w-full max-w-4xl relative text-white font-bold overflow-y-auto max-h-[90vh]">
        <button
          onClick={() => setShowAboutModal(false)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40"
          aria-label="Close about modal"
        >
          <div className="relative w-4 h-4">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -rotate-45"></div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform rotate-45"></div>
          </div>
        </button>

        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-12">
            About
          </h2>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 space-y-8 transform hover:scale-105 transition-all duration-300">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-pink-300 text-center mb-8">
                ✨ Why Choose RecallPro?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg mb-8">
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg flex items-start space-x-3">
                  <span className="text-green-400 text-xl">✅</span>
                  <span>Practice with Past Year Questions (PYQs)</span>
                </div>
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg flex items-start space-x-3">
                  <span className="text-green-400 text-xl">✅</span>
                  <span>Get Detailed Solutions & Smart Analytics</span>
                </div>
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg flex items-start space-x-3">
                  <span className="text-green-400 text-xl">✅</span>
                  <span>Improve Speed, Accuracy & Exam Ideology</span>
                </div>
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg flex items-start space-x-3">
                  <span className="text-green-400 text-xl">✅</span>
                  <span>Instant Access – Anytime, Anywhere!</span>
                </div>
              </div>

              <div className="space-y-6 bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-pink-300 text-center">
                  📘 Limited Time Offer
                </h3>
                <p className="text-lg text-white/90 text-center">
                  Subscribe now to our EAMCET Mock Test Series and unlock your gateway to success! Get exclusive access to our comprehensive test preparation platform.
                </p>
                <div className="text-xl font-bold text-purple-300 italic text-center">
                  💡 "Revise, Recall, Rise – That's the RecallPro Promise!"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactModal = () => (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl w-full max-w-2xl relative text-white">
        <button
          onClick={() => setShowContactModal(false)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40"
          aria-label="Close contact modal"
        >
          <div className="relative w-4 h-4">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -rotate-45"></div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform rotate-45"></div>
          </div>
        </button>

        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-12">
            Contact Us
          </h2>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 space-y-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-pink-300 mb-4">📧 Email</h3>
                  <p className="text-lg">support@recallpro.com</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-pink-300 mb-4">📱 Phone</h3>
                  <p className="text-lg">+91 (800) 123-4567</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-pink-300 mb-4">🏢 Address</h3>
                  <p className="text-lg">
                    123 Education Street<br />
                    Tech Hub, Digital City<br />
                    Hyderabad - 500081
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Fixed Navigation Bar */}
      <nav className="bg-black/30 backdrop-blur-md p-4 sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-2xl">R</span>
            </div>
            <span className="text-white text-3xl font-extrabold">RecallPro</span>
          </div>

          {/* Navigation Links - All in one line */}
          <div className="flex items-center gap-6">
            <button 
              className="text-white hover:text-pink-400 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
            >
              Home
            </button>
            <button 
              onClick={() => setShowAboutModal(true)} 
              className="text-white hover:text-pink-400 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
            >
              About
            </button>
            <button 
              className="text-white hover:text-pink-400 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
            >
              Services
            </button>
            <button 
              onClick={() => setShowContactModal(true)} 
              className="text-white hover:text-pink-400 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
            >
              Contact
            </button>
            <button 
              onClick={handleLogout} 
              className="px-6 py-2 bg-red-500/80 hover:bg-red-500 text-white rounded-lg transition-all duration-300 font-medium hover:scale-105"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Welcome to RecallPro
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your ultimate destination for EAMCET preparation with past year questions, detailed solutions, and smart analytics.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
              Start Practice
            </button>
            <button 
              onClick={() => setShowAboutModal(true)}
              className="px-8 py-3 border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white rounded-lg font-bold transition-all duration-300 hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </main>

      {/* Modals */}
      {showAboutModal && <AboutModal />}
      {showContactModal && <ContactModal />}
    </div>
  );
}

export default HomePage;