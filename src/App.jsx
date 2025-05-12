import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './assets/componentes/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/" element={<h1>Produtos</h1>} />
        <Route path="/" element={<h1>Categorias</h1>} />
        <Route path="/" element={<h1>Meus Pedidos</h1>} />
        <Route path="/" element={<h1>Cadastro</h1>} />
      </Routes>
    </div>
  );
}

export default App;