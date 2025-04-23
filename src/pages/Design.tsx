
import React from 'react';

const Design = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Design</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-4">
          Create beautiful and responsive designs for your web applications.
        </p>
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
  );
};

export default Design;
