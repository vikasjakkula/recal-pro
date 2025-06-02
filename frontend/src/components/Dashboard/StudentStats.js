import React from 'react';

const FeatureCard = ({ icon, text }) => (
  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-start space-x-3">
    <span className="text-green-400 text-xl">{icon}</span>
    <span className="text-white">{text}</span>
  </div>
);

const StudentStats = () => {
  return (
    <div className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px',
          }} />
        </div>

        <div className="relative space-y-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              About RecallPro
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Your comprehensive EAMCET preparation platform designed for success
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-pink-300 text-center mb-8">
                ✨ Why Choose RecallPro?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureCard
                  icon="✅"
                  text="Practice with Past Year Questions (PYQs)"
                />
                <FeatureCard
                  icon="✅"
                  text="Get Detailed Solutions & Smart Analytics"
                />
                <FeatureCard
                  icon="✅"
                  text="Improve Speed, Accuracy & Exam Ideology"
                />
                <FeatureCard
                  icon="✅"
                  text="Instant Access – Anytime, Anywhere!"
                />
              </div>

              <div className="mt-12 space-y-8">
                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-pink-300 text-center mb-4">
                    📘 Limited Time Offer
                  </h3>
                  <p className="text-lg text-white/90 text-center">
                    Subscribe now to our EAMCET Mock Test Series and unlock your gateway to success! 
                    Get exclusive access to our comprehensive test preparation platform.
                  </p>
                  <div className="text-xl font-bold text-purple-300 italic text-center mt-4">
                    💡 "Revise, Recall, Rise – That's the RecallPro Promise!"
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-pink-300 text-center mb-4">
                    🎁 Free Seat Reservation
                  </h3>
                  <p className="text-lg text-white/90 text-center">
                    Hurry! Secure your spot by subscribing now and enjoy early access to our exclusive test vault.
                  </p>
                  <div className="text-xl font-bold text-purple-300 italic text-center mt-4">
                    💬 "Mock. Master. Move Ahead – The EAMCET Way with RecallPro!"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentStats; 