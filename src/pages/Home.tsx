
import React from 'react';

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Pond Web</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Design</h2>
          <p className="text-gray-600">Create beautiful and responsive designs</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Functions</h2>
          <p className="text-gray-600">Implement powerful functionality</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Visual</h2>
          <p className="text-gray-600">Add stunning visual elements</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
