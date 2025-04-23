
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center text-xl font-bold text-gray-900">
              Pond Web
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link to="/design" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-900">
              Design
            </Link>
            <Link to="/function" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-900">
              Function
            </Link>
            <Link to="/visual" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-900">
              Visual
            </Link>
            <Link to="/library" className="inline-flex items-center px-1 pt-1 text-gray-600 hover:text-gray-900">
              Library
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
