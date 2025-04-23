
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Design from './pages/Design';
import Function from './pages/Function';
import Visual from './pages/Visual';
import Library from './pages/Library';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="design" element={<Design />} />
          <Route path="function" element={<Function />} />
          <Route path="visual" element={<Visual />} />
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
