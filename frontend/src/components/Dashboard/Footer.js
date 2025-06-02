import React from 'react';

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">RecallPro</h3>
            <p className="text-gray-400 mb-4">
              Empowering students to achieve their dreams through comprehensive EAMCET preparation and personalized learning experiences.
            </p>
          </div>

          {/* Platform Column */}
          <FooterColumn
            title="Platform"
            links={[
              'Courses',
              'Instructors',
              'Mobile App',
              'Certificates'
            ]}
          />

          {/* Support Column */}
          <FooterColumn
            title="Support"
            links={[
              'Help Center',
              'Contact Us',
              'Community',
              'Privacy Policy'
            ]}
          />

          {/* Company Column */}
          <FooterColumn
            title="Company"
            links={[
              'About Us',
              'Careers',
              'Press',
              'Blog'
            ]}
          />
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © 2024 RecallPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 