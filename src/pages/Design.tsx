
import React from 'react';

const Design = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button className="p-2 bg-white rounded-full shadow-md" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-6 w-6 text-purple-600">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="
          -translate-x-full 
          md:translate-x-0 transition-transform duration-300 ease-in-out
          fixed md:relative top-0 left-0 h-screen z-20
          w-64 md:w-20 flex flex-col bg-white shadow-md
        ">
        <div className="p-4 flex flex-col items-center border-b border-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-8 w-8 text-purple-600 hover:animate-pulse cursor-pointer">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
          <h1 className="text-xs font-bold text-gray-900 mt-1 text-center">Visual Builder</h1>
          <div className="w-full mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-purple-600 rounded-full transition-all duration-500" style={{ width: '100%' }}></div>
          </div>
          <div className="text-xs text-gray-600 mt-1">100%</div>
        </div>
        <div className="flex-1 py-4 flex flex-col space-y-2 items-center">
          <button className="w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 text-gray-500 hover:bg-gray-100 hover:scale-105" title="Project Type" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor h-6 w-6">
              <rect width="20" height="14" x="2" y="3" rx="2"></rect>
              <line x1="8" x2="16" y1="21" y2="21"></line>
              <line x1="12" x2="12" y1="17" y2="21"></line>
            </svg>
            <span className="mt-1 text-xs">Project</span>
          </button>
          <button className="w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 text-gray-500 hover:bg-gray-100 hover:scale-105" title="Layout" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panels-top-left h-6 w-6">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M3 9h18"></path>
              <path d="M9 21V9"></path>
            </svg>
            <span className="mt-1 text-xs">Layout</span>
          </button>
          <button className="w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 bg-purple-100 text-purple-700 scale-105" title="Design" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette h-6 w-6">
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
            </svg>
            <span className="mt-1 text-xs">Design</span>
          </button>
          <button className="w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 text-gray-500 hover:bg-gray-100 hover:scale-105" title="Visual Elements" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image h-6 w-6">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
            </svg>
            <span className="mt-1 text-xs">Visual</span>
          </button>
          <button className="w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 text-gray-500 hover:bg-gray-100 hover:scale-105" title="Functionality" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code h-6 w-6">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span className="mt-1 text-xs">Function</span>
          </button>
          <button className="w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 text-gray-500 hover:bg-gray-100 hover:scale-105" title="Summary" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal h-6 w-6">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" x2="20" y1="19" y2="19"></line>
            </svg>
            <span className="mt-1 text-xs">Summary</span>
          </button>
          <button className="w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 text-gray-500 hover:bg-gray-100 hover:scale-105" title="Prompt Library" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book h-6 w-6">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
            <span className="mt-1 text-xs">Library</span>
          </button>
          <button className="w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 text-gray-500 hover:bg-gray-100 hover:scale-105" title="Project Gallery" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2 h-6 w-6">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
            </svg>
            <span className="mt-1 text-xs">Gallery</span>
          </button>
        </div>
        <div className="p-3 border-t border-gray-100 flex flex-col items-center space-y-2">
          <div className="relative">
            <button className="flex flex-col items-center p-2 text-xs hover:text-gray-900 transition-colors space-y-1 hover:scale-105 transition-transform duration-200" aria-label="User profile" type="button">
              <img src="https://api.dicebear.com/7.x/micah/svg?seed=0.9185475989545171&amp;backgroundColor=b6e3f4,c0aede,d1d4f9" alt="User avatar" className="h-8 w-8 rounded-full border-2 border-purple-100" />
              <span className="text-[10px] text-gray-500">Pond</span>
            </button>
          </div>
          <div className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-medium">Premium</div>
        </div>
      </div>
      <div className="flex-1 md:pl-0 pt-16 md:pt-0 overflow-hidden">
        <div className="h-full flex flex-col lg:flex-row gap-4 overflow-hidden">
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden">
            <div className="bg-white rounded-lg shadow p-4 overflow-y-auto opacity-100 animate-fadeIn transition-opacity duration-300">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Design</h2>
                  <p className="text-gray-500 mt-1">Create beautiful and responsive designs for your web applications.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Layout Tools</h2>
                    <p className="text-gray-600">Tools for creating responsive layouts</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Style Components</h2>
                    <p className="text-gray-600">Components with pre-built styling</p>
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

export default Design;
