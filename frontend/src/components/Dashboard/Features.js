import React from 'react';
import 'aos/dist/aos.css';
import useAnimation from '../../hooks/useAnimation';

const FeatureCard = ({ feature, index, aosDelay }) => {
  const animation = useAnimation('fade-left', aosDelay + (index * 100));
  
  return (
    <div 
      className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg transform transition-all duration-300 hover:bg-white/20 w-full"
      data-aos={animation.type}
      data-aos-delay={animation.delay}
      data-aos-duration={animation.duration}
      data-aos-easing={animation.easing}
      data-aos-once={animation.once}
    >
      <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
        <span className="text-white text-xl">{feature.icon}</span>
      </div>
      <div className="flex-1">
        <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
        <p className="text-blue-100 text-sm">{feature.description}</p>
      </div>
    </div>
  );
};

const FeatureSection = ({ title, features, icon, gradient, aosDelay }) => {
  const animation = useAnimation('fade-up', aosDelay);
  
  return (
    <div 
      className={`${gradient} rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:scale-[1.02] w-full`}
      data-aos={animation.type}
      data-aos-delay={animation.delay}
      data-aos-duration={animation.duration}
      data-aos-easing={animation.easing}
      data-aos-once={animation.once}
    >
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        {icon} {title}
      </h3>
      <div className="space-y-4 w-full">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            feature={feature}
            index={index}
            aosDelay={aosDelay}
          />
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  const advancedAnalytics = [
    {
      icon: "⏱️",
      title: "Time Management Insights",
      description: "Question-wise time analysis"
    },
    {
      icon: "📊",
      title: "Difficulty Pattern Recognition",
      description: "Adaptive question selection"
    },
    {
      icon: "🔍",
      title: "Error Pattern Analysis",
      description: "Common mistake identification"
    },
    {
      icon: "📈",
      title: "Improvement Trajectory Modeling",
      description: "Growth prediction algorithms"
    }
  ];

  const premiumResources = [
    {
      icon: "🎥",
      title: "10,000+ Video Solutions",
      description: "IIT professor explanations"
    },
    {
      icon: "🧪",
      title: "Virtual Lab Experiments",
      description: "3D Physics/Chemistry simulations"
    },
    {
      icon: "🗺️",
      title: "Interactive Concept Maps",
      description: "Visual learning pathways"
    },
    {
      icon: "📚",
      title: "Formula Quick Reference",
      description: "Searchable formula database"
    }
  ];

  const competitiveFeatures = [
    {
      icon: "🏆",
      title: "National Leaderboards",
      description: "Real-time rankings among 100,000+ students"
    },
    {
      icon: "👥",
      title: "Peer Learning Groups",
      description: "Collaborative study communities"
    },
    {
      icon: "⚔️",
      title: "Battle Mode",
      description: "Head-to-head competitions"
    },
    {
      icon: "🎮",
      title: "Achievement System",
      description: "Gamified learning milestones"
    }
  ];

  const expertMentorship = [
    {
      icon: "👨‍🏫",
      title: "1-on-1 Mentor Sessions",
      description: "IIT graduate guidance"
    },
    {
      icon: "🎓",
      title: "Live Interactive Classes",
      description: "Daily doubt clearing sessions"
    },
    {
      icon: "📝",
      title: "Strategy Workshops",
      description: "Exam technique masterclasses"
    },
    {
      icon: "🧠",
      title: "Motivation Sessions",
      description: "Mental health support"
    }
  ];

  const techIntegration = [
    {
      icon: "📱",
      title: "Cross-Device Sync",
      description: "Seamless mobile/desktop experience"
    },
    {
      icon: "💾",
      title: "Offline Mode",
      description: "Downloaded content accessibility"
    },
    {
      icon: "🎤",
      title: "Voice-to-Text",
      description: "Hands-free doubt submission"
    },
    {
      icon: "🔍",
      title: "OCR Integration",
      description: "Photo-based question solving"
    }
  ];

  const securityFeatures = [
    {
      icon: "🔒",
      title: "AI Proctoring System",
      description: "Automated cheating detection"
    },
    {
      icon: "🖥️",
      title: "Secure Browser Mode",
      description: "Locked exam environment"
    },
    {
      icon: "👤",
      title: "Face Recognition",
      description: "Student identity verification"
    },
    {
      icon: "⚡",
      title: "Keystroke Pattern Analysis",
      description: "Behavioral authentication"
    }
  ];

  const businessIntelligence = [
    {
      icon: "📊",
      title: "Learning Analytics Dashboard",
      description: "Detailed student insights"
    },
    {
      icon: "🎯",
      title: "Performance Prediction Models",
      description: "Success probability algorithms"
    },
    {
      icon: "📄",
      title: "Custom Report Generation",
      description: "Exportable analysis reports"
    },
    {
      icon: "🔌",
      title: "API Integration",
      description: "Third-party system connectivity"
    }
  ];

  const personalizationEngine = [
    {
      icon: "🎯",
      title: "Adaptive Difficulty Adjustment",
      description: "Dynamic question complexity"
    },
    {
      icon: "🧠",
      title: "Learning Style Detection",
      description: "Visual/auditory/kinesthetic optimization"
    },
    {
      icon: "📈",
      title: "Weakness-Focused Practice",
      description: "Targeted improvement plans"
    },
    {
      icon: "⏰",
      title: "Custom Study Schedules",
      description: "AI-generated time tables"
    }
  ];

  const supportServices = [
    {
      icon: "🌟",
      title: "24/7 Technical Support",
      description: "Round-the-clock assistance"
    },
    {
      icon: "🎓",
      title: "Academic Counseling",
      description: "Career guidance sessions"
    },
    {
      icon: "🧘",
      title: "Stress Management Tools",
      description: "Mental wellness resources"
    },
    {
      icon: "📚",
      title: "Study Habit Optimization",
      description: "Productivity enhancement"
    }
  ];

  const technicalInfra = [
    {
      icon: "☁️",
      title: "Cloud-based Architecture",
      description: "Scalable performance"
    },
    {
      icon: "⚡",
      title: "Load Balancing",
      description: "High availability systems"
    },
    {
      icon: "🔒",
      title: "Data Encryption",
      description: "Student privacy protection"
    },
    {
      icon: "💾",
      title: "Backup & Recovery",
      description: "Data loss prevention"
    }
  ];

  return (
    <div className="space-y-16 py-8 w-full">
      <FeatureSection
        title="Advanced Analytics"
        features={advancedAnalytics}
        icon="📊"
        gradient="bg-gradient-to-r from-blue-600 to-indigo-600"
        aosDelay={0}
      />
      
      <FeatureSection
        title="Premium Learning Resources"
        features={premiumResources}
        icon="🎓"
        gradient="bg-gradient-to-r from-purple-600 to-pink-600"
        aosDelay={200}
      />

      <FeatureSection
        title="Competitive Features"
        features={competitiveFeatures}
        icon="🏆"
        gradient="bg-gradient-to-r from-pink-600 to-rose-600"
        aosDelay={400}
      />

      <FeatureSection
        title="Expert Mentorship"
        features={expertMentorship}
        icon="👨‍🏫"
        gradient="bg-gradient-to-r from-green-600 to-teal-600"
        aosDelay={600}
      />

      <FeatureSection
        title="Technology Integration"
        features={techIntegration}
        icon="📱"
        gradient="bg-gradient-to-r from-cyan-600 to-blue-600"
        aosDelay={800}
      />

      <FeatureSection
        title="Security & Proctoring"
        features={securityFeatures}
        icon="🔒"
        gradient="bg-gradient-to-r from-red-600 to-orange-600"
        aosDelay={1000}
      />

      <FeatureSection
        title="Business Intelligence"
        features={businessIntelligence}
        icon="💼"
        gradient="bg-gradient-to-r from-amber-600 to-yellow-600"
        aosDelay={1200}
      />

      <FeatureSection
        title="Personalization Engine"
        features={personalizationEngine}
        icon="🎯"
        gradient="bg-gradient-to-r from-emerald-600 to-green-600"
        aosDelay={1400}
      />

      <FeatureSection
        title="Premium Support Services"
        features={supportServices}
        icon="🌟"
        gradient="bg-gradient-to-r from-violet-600 to-purple-600"
        aosDelay={1600}
      />

      <FeatureSection
        title="Technical Infrastructure"
        features={technicalInfra}
        icon="⚙️"
        gradient="bg-gradient-to-r from-gray-700 to-gray-900"
        aosDelay={1800}
      />
    </div>
  );
};

export default Features; 