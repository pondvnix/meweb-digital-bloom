
import React from 'react';

const Library = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Library</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-4">
          Access a collection of reusable components and resources.
        </p>
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
  );
};

export default Library;
