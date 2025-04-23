
import React from 'react';

const Visual = () => {
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
            <div className="h-full bg-purple-600 rounded-full transition-all duration-500" style={{ width: '80%' }}></div>
          </div>
          <div className="text-xs text-gray-600 mt-1">80%</div>
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
          <button className="w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 text-gray-500 hover:bg-gray-100 hover:scale-105" title="Design" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette h-6 w-6">
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
            </svg>
            <span className="mt-1 text-xs">Design</span>
          </button>
          <button className="w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 bg-purple-100 text-purple-700 scale-105" title="Visual Elements" type="button">
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
                  <h2 className="text-2xl font-bold text-gray-900">Visual Elements</h2>
                  <p className="text-gray-500 mt-1">Select the visual styles for icons and illustrations</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Choose Icon Style</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md border-purple-500 ring-2 ring-purple-200">
                      <div className="flex flex-col">
                        <div className="p-3 mb-3 rounded-md bg-gray-50 flex justify-center bg-purple-50">
                          <div className="text-purple-600">
                            <div className="flex space-x-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-6 h-6 stroke-current">
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home w-6 h-6 stroke-current">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell w-6 h-6 stroke-current">
                                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-6 h-6 stroke-current">
                                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <h4 className="font-medium text-center text-purple-700">Line Icons</h4>
                        <p className="text-sm text-gray-500 mt-1 text-center">Clean outline icons with a modern, minimalist look</p>
                      </div>
                    </div>
                    <div className="p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md border-gray-200">
                      <div className="flex flex-col">
                        <div className="p-3 mb-3 rounded-md bg-gray-50 flex justify-center ">
                          <div className="text-gray-600">
                            <div className="flex space-x-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-6 h-6 fill-current">
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home w-6 h-6 fill-current">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell w-6 h-6 fill-current">
                                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-6 h-6 fill-current">
                                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <h4 className="font-medium text-center text-gray-900">Solid Icons</h4>
                        <p className="text-sm text-gray-500 mt-1 text-center">Bold filled icons with strong visual presence</p>
                      </div>
                    </div>
                    <div className="p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md border-gray-200">
                      <div className="flex flex-col">
                        <div className="p-3 mb-3 rounded-md bg-gray-50 flex justify-center ">
                          <div className="text-gray-600">
                            <div className="flex space-x-3">
                              <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-6 h-6 text-gray-300 fill-current">
                                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-6 h-6 text-gray-600 absolute top-0 left-0 stroke-current">
                                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                </svg>
                              </div>
                              <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home w-6 h-6 text-gray-300 fill-current">
                                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home w-6 h-6 text-gray-600 absolute top-0 left-0 stroke-current">
                                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                              </div>
                              <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell w-6 h-6 text-gray-300 fill-current">
                                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell w-6 h-6 text-gray-600 absolute top-0 left-0 stroke-current">
                                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                                </svg>
                              </div>
                              <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-6 h-6 text-gray-300 fill-current">
                                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-6 h-6 text-gray-600 absolute top-0 left-0 stroke-current">
                                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h4 className="font-medium text-center text-gray-900">Duotone Icons</h4>
                        <p className="text-sm text-gray-500 mt-1 text-center">Two-tone icons with depth and visual interest</p>
                      </div>
                    </div>
                    <div className="p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md border-gray-200">
                      <div className="flex flex-col">
                        <div className="p-3 mb-3 rounded-md bg-gray-50 flex justify-center ">
                          <div className="text-gray-600">
                            <div className="flex space-x-3">
                              <div className="p-1 rounded bg-gradient-to-br from-purple-500 to-pink-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-5 h-5 text-white">
                                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                </svg>
                              </div>
                              <div className="p-1 rounded bg-gradient-to-br from-blue-500 to-teal-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home w-5 h-5 text-white">
                                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                              </div>
                              <div className="p-1 rounded bg-gradient-to-br from-amber-500 to-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell w-5 h-5 text-white">
                                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                                </svg>
                              </div>
                              <div className="p-1 rounded bg-gradient-to-br from-green-500 to-emerald-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-5 h-5 text-white">
                                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h4 className="font-medium text-center text-gray-900">Gradient Icons</h4>
                        <p className="text-sm text-gray-500 mt-1 text-center">Vibrant gradient-filled icons for a modern feel</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Choose Illustration Style</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md border-gray-200">
                      <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image w-5 h-5 text-gray-500">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                          <circle cx="9" cy="9" r="2"></circle>
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                        </svg>
                        <span className="ml-2 font-medium text-gray-900">Flat Illustrations</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">Modern, colorful illustrations with flat design</p>
                      <div className="w-full h-20 bg-blue-100 rounded-md flex items-center justify-center">
                        <div className="bg-blue-500 w-8 h-8 rounded-full"></div>
                        <div className="bg-green-500 w-10 h-5 rounded-md ml-2"></div>
                        <div className="bg-yellow-500 w-5 h-10 rounded-md ml-2"></div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md border-purple-500 ring-2 ring-purple-200">
                      <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image w-5 h-5 text-purple-600">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                          <circle cx="9" cy="9" r="2"></circle>
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                        </svg>
                        <span className="ml-2 font-medium text-purple-700">Isometric</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">Three-dimensional illustrations with depth</p>
                      <div className="w-full h-20 bg-purple-100 rounded-md flex items-center justify-center">
                        <div className="relative">
                          <div className="bg-purple-300 w-10 h-5 transform skew-x-12 skew-y-12"></div>
                          <div className="bg-purple-500 w-10 h-10 absolute -top-6 -left-2 transform skew-x-12 skew-y-12"></div>
                          <div className="bg-purple-700 w-5 h-10 absolute -top-6 left-6 transform skew-x-12 skew-y-12"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md border-gray-200">
                      <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image w-5 h-5 text-gray-500">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                          <circle cx="9" cy="9" r="2"></circle>
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                        </svg>
                        <span className="ml-2 font-medium text-gray-900">Hand Drawn</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">Sketchy illustrations with a human touch</p>
                      <div className="w-full h-20 bg-amber-100 rounded-md flex items-center justify-center">
                        <div className="relative">
                          <div className="border-2 border-amber-800 w-12 h-8 rounded-full transform rotate-12"></div>
                          <div className="border-2 border-amber-800 w-6 h-6 rounded-full absolute -top-2 -right-2"></div>
                          <div className="border-2 border-amber-800 w-8 h-3 absolute top-8 left-2 transform -rotate-12"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md border-gray-200">
                      <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image w-5 h-5 text-gray-500">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                          <circle cx="9" cy="9" r="2"></circle>
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                        </svg>
                        <span className="ml-2 font-medium text-gray-900">Minimal Line Art</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">Simple, elegant illustrations with thin lines</p>
                      <div className="w-full h-20 bg-gray-100 rounded-md flex items-center justify-center">
                        <div className="relative">
                          <div className="border border-gray-800 w-12 h-12 rounded-full"></div>
                          <div className="border border-gray-800 w-8 h-1 absolute top-6 left-2"></div>
                          <div className="border border-gray-800 w-1 h-8 absolute top-2 left-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Back</button>
                  <button className="flex items-center px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
                    Continue to Functionality
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 overflow-hidden animate-scaleIn">
              <div className="h-full flex flex-col">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Live Preview</h2>
                  <div className="text-sm font-medium px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Website - Business/Corporate</div>
                </div>
                <div className="relative flex-1 flex items-center justify-center overflow-auto">
                  <div className="w-full max-w-lg mx-auto transition-all duration-500 transform hover:scale-[1.02]">
                    <div className="rounded-lg shadow-lg overflow-hidden bg-gray-50 text-gray-800 backdrop-blur-md bg-opacity-70 font-sans flex flex-col min-h-[500px]">
                      <div className="p-4 border-b text-center">
                        <div className="flex items-center space-x-2">
                          <div className="stroke-current fill-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor w-8 h-8 text-purple-600">
                              <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                              <line x1="8" x2="16" y1="21" y2="21"></line>
                              <line x1="12" x2="12" y1="17" y2="21"></line>
                            </svg>
                          </div>
                          <h3 className="font-bold">คำลังใจ</h3>
                        </div>
                      </div>
                      <div className="p-6 flex-1 grid grid-cols-2 gap-4">
                        <div className="col-span-full mb-6 text-center">
                          <p className="text-lg italic">แพลตฟอร์มที่รวบรวมและแบ่งปันคำคมให้กำลังใจ เพื่อเติมพลังให้ชีวิตของคุณ</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                          <div className="w-full h-24 bg-gray-200 rounded mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                          <div className="w-full h-24 bg-gray-200 rounded mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                          <div className="w-full h-24 bg-gray-200 rounded mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                          <div className="w-full h-24 bg-gray-200 rounded mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="p-4 border-t text-center">
                        <div>
                          <p className="text-sm">© 2025 คำลังใจ. All rights reserved.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Project:</span>
                      <span className="ml-1 font-medium">คำลังใจ</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Layout:</span>
                      <span className="ml-1 font-medium">Two Column</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Theme:</span>
                      <span className="ml-1 font-medium">Minimalist</span>
                    </div>
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

export default Visual;
