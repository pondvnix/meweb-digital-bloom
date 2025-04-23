
import React from 'react';

const Library = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 md:pl-0 pt-16 md:pt-0 overflow-hidden">
        <div className="h-full flex flex-col lg:flex-row gap-4 overflow-hidden">
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden">
            <div className="bg-white rounded-lg shadow p-4 overflow-y-auto opacity-100 animate-fadeIn transition-opacity duration-300">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Library</h2>
                  <p className="text-gray-500 mt-1">Access a collection of reusable components and resources.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Component Library</h2>
                    <p className="text-gray-600">Reusable UI components</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Design Templates</h2>
                    <p className="text-gray-600">Pre-designed page templates</p>
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
