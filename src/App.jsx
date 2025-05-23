// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/produtos" element={<Layout><ProductListingPage /></Layout>} />
      <Route path="/categorias" element={<Layout><ProductViewPage /></Layout>} />
    </Routes>
  );
}

export default App;
