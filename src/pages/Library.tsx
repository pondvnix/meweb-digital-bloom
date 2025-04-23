
import React from 'react';

const Library = () => {
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
          <button className="w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 bg-purple-100 text-purple-700 scale-105" title="Prompt Library" type="button">
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
              <div className="h-full flex flex-col">
                <div className="border-b pb-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <button className="mr-2 p-2 rounded-full hover:bg-gray-100 transition-colors" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left h-5 w-5 text-gray-600">
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                      </button>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book h-6 w-6 text-purple-600 mr-2">
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                          </svg>
                          Prompt Library
                        </h2>
                        <p className="text-gray-500">Manage your saved design prompts</p>
                      </div>
                    </div>
                    <div className="flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full text-sm font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up h-4 w-4 mr-1">
                        <path d="M7 10v12"></path>
                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                      </svg>
                      Premium Active
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
                  <div className="relative flex-1 max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search h-4 w-4 text-gray-400">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                    <input type="text" placeholder="Search prompts..." className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" value="" />
                  </div>
                  <div className="flex gap-3">
                    <div className="text-sm text-gray-500 flex items-center">1 prompt saved</div>
                    <button className="flex items-center gap-1 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2 h-4 w-4">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                      </svg>
                      View Public Gallery
                    </button>
                  </div>
                </div>
                <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="flex items-center">
                    <img src="https://api.dicebear.com/7.x/micah/svg?seed=0.9185475989545171&amp;backgroundColor=b6e3f4,c0aede,d1d4f9" alt="Pond" className="h-12 w-12 rounded-full border-2 border-purple-100" />
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900">Pond</h3>
                      <p className="text-sm text-gray-500">0 projects showcased</p>
                    </div>
                    <button className="ml-auto px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user h-4 w-4">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span>Edit Profile</span>
                    </button>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto pr-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-blue-50 text-blue-600 border-blue-200">
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <h3 className="font-bold text-lg">Interactive Platform</h3>
                          </div>
                          <div className="flex items-center space-x-1">
                            <button className="p-1.5 rounded-md hover:bg-white hover:bg-opacity-50 transition-colors" title="Edit prompt details" type="button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-line h-4 w-4 text-gray-500 hover:text-purple-500">
                                <path d="M12 20h9"></path>
                                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                              </svg>
                            </button>
                            <button className="p-1.5 rounded-md hover:bg-white hover:bg-opacity-50 transition-colors" title="Delete prompt" type="button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 h-4 w-4 text-gray-500 hover:text-red-500">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                <line x1="10" x2="10" y1="11" y2="17"></line>
                                <line x1="14" x2="14" y1="11" y2="17"></line>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mt-1 mb-3">
                          <div className="flex items-center mr-2">
                            <img src="https://api.dicebear.com/7.x/micah/svg?seed=0.9185475989545171&amp;backgroundColor=b6e3f4,c0aede,d1d4f9" alt="Pond" className="h-5 w-5 rounded-full mr-1" />
                            <span>Pond</span>
                          </div>
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3 w-3 mr-1">
                              <path d="M8 2v4"></path>
                              <path d="M16 2v4"></path>
                              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                              <path d="M3 10h18"></path>
                            </svg>
                            <span>Apr 23, 2025</span>
                          </div>
                          <span className="mx-2">•</span>
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor w-4 h-4">
                              <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                              <line x1="8" x2="16" y1="21" y2="21"></line>
                              <line x1="12" x2="12" y1="17" y2="21"></line>
                            </svg>
                            <span className="ml-1">Website</span>
                            <span className="mx-1">-</span>
                            <span>Business/Corporate</span>
                          </div>
                        </div>
                        <div className="bg-white bg-opacity-70 rounded-md p-3 mb-3 text-sm text-gray-700 line-clamp-3">
                          Create a Light Modern website for Business/Corporate named "คำลังใจ" with a two column layout featuring simple header and simple footer. The tagline/description is: "แพลตฟอร์มที่รวบรวมและแบ่งปันคำคมให้กำลังใจ เพื่อเติมพลังให้ชีวิตของคุณ". Implement Glassmorphism design principles (Glassmorphism with frosted glass effect, transparency and background blur). Use the following color palette: primary (#ffffff), secondary (#f3f4f6), accent (#3b82f6), text (#111827), text secondary (#6b7280). For typography, use Poppins for headings and Lato for body text. Include Line Icons for the icon system and Isometric illustration style for visual elements. Implement advanced level functionality with support for Responsive Design, API Integration, Analytics, Dark Mode, SEO Optimization, Accessibility. Include these custom features: - ในหน้าสร้างคำลังใจ ให้ User สามารถเลือกคำได้เท่านั้นครับ โดยคำที่แสดง จะดึงมาจากหน้าจัดการคำ ที่เชื่อมกับ template ที่มีอยู่หากคำที่ไม่เชื่อม template คำ ไม่ต้องดึงมาให้ผู้ใช้เลือก - ปรับ แต่ง Responsive mobile&amp;tablet ให้ดู Layout สวยงาม ทั้งตาราง และ Sections และใช้เป็น Footer sticky nav menu - หน้าอันดับยอดนิยม (/leaderboard) ปรับแต่งให้ดูสวยงามกว่านี้ครับ.
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">Responsive Design</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">API Integration</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">Analytics</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">Dark Mode</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">SEO Optimization</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">Accessibility</span>
                        </div>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200 border-opacity-50">
                          <div className="flex space-x-2">
                            <button className="text-xs flex items-center gap-1 px-2 py-1 bg-white rounded hover:bg-gray-50" type="button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy h-3 w-3">
                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                              </svg>
                              <span>Copy</span>
                            </button>
                            <button className="text-xs flex items-center gap-1 px-2 py-1 bg-purple-600 text-white rounded hover:bg-purple-700" type="button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal h-3 w-3">
                                <polyline points="4 17 10 11 4 5"></polyline>
                                <line x1="12" x2="20" y1="19" y2="19"></line>
                              </svg>
                              <span>Open in Bolt</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-2.5 w-2.5">
                                <path d="M15 3h6v6"></path>
                                <path d="M10 14 21 3"></path>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    <div className="rounded-lg shadow-lg overflow-hidden bg-white text-gray-900 backdrop-blur-md bg-opacity-70 font-sans flex flex-col min-h-[500px]">
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
                      <span className="ml-1 font-medium">Light Modern</span>
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

export default Library;
