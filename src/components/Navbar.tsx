import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Flower } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* <Flower className="h-8 w-8 text-white" /> */}
              <span className="text-white text-xl font-semibold">Sahaja Yoga Meditation</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/instructions" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Learn
              </Link>
              <Link to="/hindi-self-realization" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Hindi Self Realization
              </Link>
              <Link to="/english-self-realization" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                English Self Realization
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/instructions"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Learn
            </Link>
            <Link
              to="/hindi-self-realization"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Hindi Self Realization
            </Link>
            <Link
              to="/english-self-realization"
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              English Self Realization
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;