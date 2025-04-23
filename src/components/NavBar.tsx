
import React from 'react';

const NavBar = () => {
  return (
    <div className="md:hidden fixed top-4 left-4 z-30">
      <button className="p-2 bg-white rounded-full shadow-md" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-6 w-6 text-purple-600">
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

export default NavBar;
