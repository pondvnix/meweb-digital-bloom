
import React from 'react';

const Visual = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Visual</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-4">
          Add stunning visual elements to enhance your web applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Animation Effects</h2>
            <p className="text-gray-600">Create engaging animations</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Chart Components</h2>
            <p className="text-gray-600">Visualize data with interactive charts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visual;
