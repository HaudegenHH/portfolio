import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import Skills from './routes/Skills';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
