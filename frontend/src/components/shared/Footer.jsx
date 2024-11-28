import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* About Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p>
              We connect job seekers with top employers. Our mission is to make job searching easy and accessible for everyone.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/jobs" className="hover:underline">Browse Jobs</a></li>
              <li><a href="/employers" className="hover:underline">For Employers</a></li>
              <li><a href="https://beamish-choux-ee4763.netlify.app" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/saqibalimir" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; 2024 Job Finder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
