
import React from 'react';

const Function = () => {
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
          <button className="w-16 flex flex-col items-center justify-center p-2 rounded-md transition-all duration-200 bg-purple-100 text-purple-700 scale-105" title="Functionality" type="button">
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
                  <h2 className="text-2xl font-bold text-gray-900">Function</h2>
                  <p className="text-gray-500 mt-1">Implement powerful functionality for your web applications.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Choose Functionality Level</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="h-6 w-6 rounded-full flex items-center justify-center bg-gray-100 text-gray-500">
                          <span className="text-xs font-medium">B</span>
                        </div>
                        <span className="font-medium text-gray-900">Basic</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 ml-9">Essential features for a minimal viable product</p>
                      <div className="mt-2 ml-9 p-2 bg-gray-50 rounded-md text-xs text-gray-500">
                        <span className="font-medium text-gray-700">Examples:</span> Simple forms, static content, basic navigation
                      </div>
                    </div>
                    <div className="p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="h-6 w-6 rounded-full flex items-center justify-center bg-gray-100 text-gray-500">
                          <span className="text-xs font-medium">S</span>
                        </div>
                        <span className="font-medium text-gray-900">Standard</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 ml-9">Comprehensive features for typical use cases</p>
                      <div className="mt-2 ml-9 p-2 bg-gray-50 rounded-md text-xs text-gray-500">
                        <span className="font-medium text-gray-700">Examples:</span> User accounts, search functionality, content filtering
                      </div>
                    </div>
                    <div className="p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md border-purple-500 ring-2 ring-purple-200">
                      <div className="flex items-center space-x-3">
                        <div className="h-6 w-6 rounded-full flex items-center justify-center bg-purple-100 text-purple-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                        <span className="font-medium text-purple-700">Advanced</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 ml-9">Extensive features for power users and complex scenarios</p>
                      <div className="mt-2 ml-9 p-2 bg-gray-50 rounded-md text-xs text-gray-500">
                        <span className="font-medium text-gray-700">Examples:</span> Advanced filtering, real-time updates, complex interactions
                      </div>
                    </div>
                    <div className="p-4 border rounded-xl cursor-pointer transition-all hover:shadow-md border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="h-6 w-6 rounded-full flex items-center justify-center bg-gray-100 text-gray-500">
                          <span className="text-xs font-medium">E</span>
                        </div>
                        <span className="font-medium text-gray-900">Enterprise</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 ml-9">Full-featured with security, scalability, and advanced integrations</p>
                      <div className="mt-2 ml-9 p-2 bg-gray-50 rounded-md text-xs text-gray-500">
                        <span className="font-medium text-gray-700">Examples:</span> SSO, role-based access, audit logs, multi-tenant support
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Technical Requirements</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="p-3 border rounded-lg cursor-pointer transition-all border-purple-500 bg-purple-50">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 h-5 w-5 border rounded bg-purple-600 border-purple-600 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3 w-3 text-white">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                        <span className="font-medium text-sm">Responsive Design</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-8">Adapts to different screen sizes and devices</p>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer transition-all border-purple-500 bg-purple-50">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 h-5 w-5 border rounded bg-purple-600 border-purple-600 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3 w-3 text-white">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                        <span className="font-medium text-sm">Dark Mode</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-8">Alternate color scheme for low-light environments</p>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer transition-all border-purple-500 bg-purple-50">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 h-5 w-5 border rounded bg-purple-600 border-purple-600 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3 w-3 text-white">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                        <span className="font-medium text-sm">Accessibility</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-8">Compliant with WCAG guidelines for all users</p>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer transition-all border-purple-500 bg-purple-50">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 h-5 w-5 border rounded bg-purple-600 border-purple-600 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3 w-3 text-white">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                        <span className="font-medium text-sm">API Integration</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-8">Connect with external services and data sources</p>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer transition-all border-purple-500 bg-purple-50">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 h-5 w-5 border rounded bg-purple-600 border-purple-600 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3 w-3 text-white">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                        <span className="font-medium text-sm">Analytics</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-8">Track user behavior and application performance</p>
                    </div>
                    <div className="p-3 border rounded-lg cursor-pointer transition-all border-purple-500 bg-purple-50">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 h-5 w-5 border rounded bg-purple-600 border-purple-600 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-3 w-3 text-white">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                        <span className="font-medium text-sm">SEO Optimization</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 ml-8">Improved visibility in search engine results</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 relative">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-medium text-gray-900">Custom Features</h3>
                  </div>
                  <div className="opacity-100">
                    <div className="flex">
                      <input type="text" className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Enter a custom feature..." value="- ในหน้าสร้างคำลังใจ ให้ User สามารถเลือกคำได้เท่านั้นครับ โดยคำที่แสดง จะดึงมาจากหน้าจัดการคำ ที่เชื่อมกับ template ที่มีอยู่หากคำที่ไม่เชื่อม template คำ ไม่ต้องดึงมาให้ผู้ใช้เลือก - ปรับ แต่ง Responsive mobile&amp;tablet ให้ดู Layout สวยงาม ทั้งตาราง และ Sections และใช้เป็น Footer sticky nav menu - หน้าอันดับยอดนิยม (/leaderboard) ปรับแต่งให้ดูสวยงามกว่านี้ครับ" />
                      <button className="px-4 py-2 rounded-r-md flex items-center justify-center bg-purple-600 text-white hover:bg-purple-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-circle h-4 w-4 mr-1">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M8 12h8"></path>
                          <path d="M12 8v8"></path>
                        </svg>
                        Add
                      </button>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-700 text-sm mb-2">Added Features:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md bg-gray-50">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code h-4 w-4 text-purple-500 mr-2">
                              <polyline points="16 18 22 12 16 6"></polyline>
                              <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                            <span className="text-sm">- ในหน้า (/create-quote) ให้เป็น Radio Select โดยให้ User เลือกเพียงแค่ 1 คำ โดยมี Flow ของคำดังนนี้ 1 คำ &gt; สามารถมีได้หลายเทมเพลต &gt; 1 เทมเพลตสามารถมีได้แค่ 1 หมวดหมู่ - เอาตารางผู้แต่ง,หมวดหมู่,ไลค์ ออกในหน้าจัดการคำลังใจ โดยหน้านี้เป็นการสร้างคำจาก admin เท่านั้นเพื่อนำไปใช้กับ template - ในหน้าจัดการเทมเพลต (/management) ในส่วนของคำแนะนำให้เป็น dropdown select ที่ดึงคำมาจาก tabs จัดการคำลังใจเท่านั้น - เมื่อมีการเปลี่ยนชื่อคำ คำที่อยู่ Select ไว้ในtab จัดการเทมเพลตก็จะถูกเปลี่ยนไปด้วยครับ - เพิ่ม tabs เทมเพลตที่ใช้งานแล้วในหน้าจัดการคำกำลังใจ - เทมเพลตที่ใช้แล้ว จะไม่ถูกนำไปแสดงให้ User คนอื่นเลือกอีก ในหน้า(/create-quote)</span>
                          </div>
                          <button className="p-1 rounded-full hover:bg-gray-200 text-gray-400 hover:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Back</button>
                  <button className="flex items-center px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
                    View Summary
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
      <div className="fixed top-0 left-0 right-0 bg-yellow-100 text-yellow-800 p-2 text-xs z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-circle w-4 h-4 mr-1">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
            <span className="font-bold">Loading:</span>
            <span className="ml-1">Data</span>
            <span className="ml-2 text-red-600 font-bold">Timed out (1s) - please try refreshing</span>
          </div>
          <button className="p-1 rounded bg-yellow-200 hover:bg-yellow-300 flex items-center gap-1" title="Force reload page" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw h-3 w-3">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M8 16H3v5"></path>
            </svg>
            <span>Reload</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Function;
