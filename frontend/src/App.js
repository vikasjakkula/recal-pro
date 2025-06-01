import React, { useState } from 'react';
import forestBg from './fevicon2.webp' // Ensure this image exists in the correct path

const API_URL = 'http://localhost:5000/api';

function App() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Validate form data
    if (!formData.username.trim()) {
      setMessage('Username is required');
      setLoading(false);
      return;
    }

    if (!formData.password.trim()) {
      setMessage('Password is required');
      setLoading(false);
      return;
    }

    if (!isLoginMode) {
      if (!formData.email.trim()) {
        setMessage('Email is required');
        setLoading(false);
        return;
      }

      if (formData.password.length < 6) {
        setMessage('Password must be at least 6 characters long');
        setLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setMessage('Passwords do not match!');
        setLoading(false);
        return;
      }
    }

    try {
      if (isLoginMode) {
        const response = await fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: formData.username.trim(),
            password: formData.password
          })
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || data.error || 'Login failed');
        }

        // Store the token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setMessage('Login successful!');
      } else {
        const response = await fetch(`${API_URL}/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: formData.username.trim(),
            email: formData.email.trim(),
            password: formData.password
          })
        });

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || data.error || 'Registration failed');
        }

        // Store the token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setMessage('Registration successful!');
      }

      // Clear form data
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

      // Show success message and close modal
      setTimeout(() => {
        setShowModal(false);
        setMessage('');
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setMessage(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setMessage('');
  };

  return (
    <div
      className="min-h-screen w-screen flex items-center justify-center overflow-hidden fixed inset-0"
      style={{
        backgroundImage: `url(${forestBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '100vh',
        width: '100vw'
      }}
    >
      {/* Blurred Main Container */}
      <div
        className="backdrop-blur-sm bg-black/20 w-4/5 h-4/5 rounded-3xl flex flex-col items-center justify-between p-10 overflow-y-auto"
      >
        {/* Header */}
        <nav className="flex justify-between w-full text-white font-bold text-lg mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-2xl">R</span>
            </div>
            <span className="text-white text-3xl font-extrabold">RecallPro</span>
          </div>
          <div className="hidden md:flex gap-10">
            <a href="#" className="hover:text-pink-400">Home</a>
            <a href="#" className="hover:text-pink-400">About</a>
            <a href="#" className="hover:text-pink-400">Services</a>
            <a href="#" className="hover:text-pink-400">Contact</a>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="border-2 border-white px-6 py-2 rounded-lg hover:bg-white/20 transition text-white text-lg"
          >
            Login
          </button>
        </nav>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center text-white font-bold px-4 md:px-8 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8">
            Welcome to <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">RecallPro</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
            🎯 Ace EAMCET with RecallPro – Your Smart Prep Partner!
          </h2>

          <div className="space-y-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-pink-300">
                📘 Get Your Free Seat Reserved
              </h3>
              <p className="text-lg md:text-xl text-white/90">
                Subscribe now to our EAMCET Mock Test Series and unlock your gateway to success! Get exclusive access to a wide range of online PYQ-based mock tests designed to sharpen your concepts and boost your confidence.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">
                ✨ Why RecallPro?
              </h3>
              <ul className="text-lg md:text-xl text-white/90 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✅</span> Practice with Past Year Questions (PYQs)
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span> Get Detailed Solutions & Smart Analytics
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span> Improve Speed, Accuracy & Exam Ideology
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span> Instant Access – Anytime, Anywhere!
                </li>
              </ul>
            </div>

            <div className="text-xl md:text-2xl font-bold text-pink-300 italic">
              💡 "Revise, Recall, Rise – That's the RecallPro Promise!"
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-lg md:text-xl text-white/90 mb-4">
                When you subscribe, you don't just take tests—you take steps toward your dream college. Our test series isn't just a question bank; it's a powerful toolkit to train your brain, build exam temperament, and recall smarter under pressure.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-xl md:text-2xl font-bold text-purple-300">
                🎁 Limited Offer: Free Seat Reservation!
              </div>
              <p className="text-lg md:text-xl text-white/90">
                Hurry! Secure your spot by subscribing now and enjoy early access to our exclusive test vault—
              </p>
              <div className="text-xl md:text-2xl font-bold text-pink-300 italic">
                💬 "Mock. Master. Move Ahead – The EAMCET Way with RecallPro!"
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-bold"
          >
            Get Started Now
          </button>
        </div>

        {/* Modal (Login/Register) */}
        {showModal && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-50">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl w-full max-w-md relative text-white font-bold">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-2xl bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center"
              >
                ×
              </button>

              <h2 className="text-3xl text-center mb-4 font-extrabold">
                {isLoginMode ? 'Login' : 'Register'}
              </h2>
              <p className="text-center text-lg mb-6">
                {isLoginMode ? 'Welcome back!' : 'Create your account'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/10 border border-white/30 rounded-lg placeholder-white/70 text-white text-lg"
                  required
                />

                {!isLoginMode && (
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white/10 border border-white/30 rounded-lg placeholder-white/70 text-white text-lg"
                    required
                  />
                )}

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-white/10 border border-white/30 rounded-lg placeholder-white/70 text-white text-lg"
                  required
                />

                {!isLoginMode && (
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white/10 border border-white/30 rounded-lg placeholder-white/70 text-white text-lg"
                    required
                  />
                )}

                {message && (
                  <p className={`text-center ${message.includes('successful') ? 'text-green-300' : 'text-red-300'}`}>
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-xl hover:from-pink-600 hover:to-purple-700 transition"
                >
                  {loading ? 'Processing...' : isLoginMode ? 'Login' : 'Register'}
                </button>
              </form>

              <p className="text-center mt-4 text-lg">
                {isLoginMode ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={toggleMode}
                  className="ml-2 text-pink-400 hover:text-pink-300 underline"
                >
                  {isLoginMode ? 'Register' : 'Login'}
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
