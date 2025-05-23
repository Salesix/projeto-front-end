import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';
import { HeaderLogo } from './Logo';

function Header() {
  return (
    <header>
      {/* Topo: logo, busca, login e carrinho */}
      <div className="top">
        <HeaderLogo />

        {/* Busca */}
        <div className="search">
          <input type="text" placeholder="Pesquisar produto..." />
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {/* Ações */}
        <div className="actions">
          <Link className='cad' to="/">Cadastre-se</Link>
          <button>Entrar</button>
          <div className="cart-wrapper">
            <img src="../src/assets/mini-cart.svg" alt="" />
            <div className="count">2</div>
          </div>
        </div>
      </div>

      {/* Menu de navegação com NavLink */}
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'ativo' : ''}>Home</NavLink>
        <NavLink to="/produtos" className={({ isActive }) => isActive ? 'ativo' : ''}>Produtos</NavLink>
        <NavLink to="/categorias" className={({ isActive }) => isActive ? 'ativo' : ''}>Categorias</NavLink>
        <NavLink to="/pedidos" className={({ isActive }) => isActive ? 'ativo' : ''}>Meus Pedidos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
