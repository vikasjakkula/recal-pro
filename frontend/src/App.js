import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlowingButton from './GlowingButton';
import forestBg from './fevicon2.webp' // Ensure this image exists in the correct path
import Loading from './components/Loading';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aosConfig from './config/aos';

const API_URL = 'http://localhost:5000/api';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

// Landing Page Component
const LandingPage = ({ 
  isLoginMode, 
  showModal, 
  showAboutModal, 
  showContactModal, 
  setShowModal, 
  setShowAboutModal, 
  setShowContactModal,
  handleSubmit,
  handleInputChange,
  toggleMode,
  formData,
  loading,
  message
}) => {
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
      {/* Main Content */}
      <div className="backdrop-blur-sm bg-black/20 h-[60%] w-[50%] rounded-3xl flex flex-col items-center justify-between p-8 overflow-y-auto">
        {/* Header */}
        <nav className="flex justify-between w-full text-white font-bold text-xl mb-6">
          <div className="flex items-center">
            <span className="text-white text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">RecallPro</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <button 
              onClick={() => setShowAboutModal(true)}
              className="hover:text-pink-400 relative group font-light text-lg tracking-widest transition-all duration-300"
              style={{ 
                fontFamily: 'Segoe UI Light',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '1.15rem',
                fontWeight: '300'
              }}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => setShowContactModal(true)}
              className="hover:text-pink-400 relative group font-light text-lg tracking-widest transition-all duration-300"
              style={{ 
                fontFamily: 'Segoe UI Light',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '1.15rem',
                fontWeight: '300'
              }}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="border border-white px-6 py-2 rounded-lg hover:bg-white/20 transition text-white text-lg gradient-glow"
          >
            Login
          </button>
        </nav>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center text-white px-4 max-w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 font-poppins">
            Crack <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">EAMCET</span>
          </h1>
          
          <h2 className="text-lg md:text-xl font-bold mb-10 text-white/90 font-poppins leading-relaxed">
            Unleash your potential with real-time test simulations
          </h2>

          <GlowingButton onClick={() => setShowModal(true)} />
        </div>
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
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-xl hover:from-pink-600 hover:to-purple-700 transition gradient-glow"
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
      
      {/* Keep your existing AboutModal and ContactModal components */}
    </div>
  );
};

function App() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS with proper configuration
    AOS.init(aosConfig);
    
    // Refresh AOS on window resize
    const refreshAOS = () => AOS.refresh();
    window.addEventListener('resize', refreshAOS);
    
    // Initial loading animation
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener('resize', refreshAOS);
      clearTimeout(timer);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const endpoint = isLoginMode ? `${API_URL}/login` : `${API_URL}/register`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'An error occurred');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setMessage(`${isLoginMode ? 'Login' : 'Registration'} successful!`);

      setTimeout(() => {
        setShowModal(false);
        window.location.href = '/dashboard';
      }, 2000);
    } catch (error) {
      setMessage(error.message);
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

  if (initialLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Routes>
          <Route 
            path="/" 
            element={
              <LandingPage
                isLoginMode={isLoginMode}
                showModal={showModal}
                showAboutModal={showAboutModal}
                showContactModal={showContactModal}
                setShowModal={setShowModal}
                setShowAboutModal={setShowAboutModal}
                setShowContactModal={setShowContactModal}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                toggleMode={toggleMode}
                formData={formData}
                loading={loading}
                message={message}
              />
            } 
          />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mock-test"
            element={
              <ProtectedRoute>
                <div className="p-8 text-center">
                  <h1 className="text-3xl font-bold mb-4">Mock Test</h1>
                  <p>Mock test interface coming soon...</p>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <div className="p-8 text-center">
                  <h1 className="text-3xl font-bold mb-4">Analytics</h1>
                  <p>Analytics dashboard coming soon...</p>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/resources"
            element={
              <ProtectedRoute>
                <div className="p-8 text-center">
                  <h1 className="text-3xl font-bold mb-4">Learning Resources</h1>
                  <p>Resources library coming soon...</p>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <div className="p-8 text-center">
                  <h1 className="text-3xl font-bold mb-4">Settings</h1>
                  <p>Settings page coming soon...</p>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
