
import React from 'react';

const Function = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Function</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-4">
          Implement powerful functionality for your web applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">API Integration</h2>
            <p className="text-gray-600">Connect your app with external services</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">User Authentication</h2>
            <p className="text-gray-600">Secure user login and registration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Function;
