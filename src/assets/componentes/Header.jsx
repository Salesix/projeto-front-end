import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      {/* Topo: logo, busca, login e carrinho */}
      <div className="top">
        {/* Logo vai ser trocada depois */}
        <div className="logo">
            <div className="logoIcon">❯_</div>
            <div className="logoName">Digital Store</div>
        </div>

        {/* Busca lambrar de fazer a funcion para funcinar a pesquisa e trocar icons*/}
        <div className="search">
          <input type="text" placeholder="Pesquisar produto..." />
          <span>🔍</span>
        </div>

        {/* Ações: cadastro, login, carrinho trocar icons depois*/}
        <div className="actions">
          <Link to="/">Cadastre-se</Link>
          <button>Entrar</button>
          <div className="cart">
            🛒
            <span>2</span>
          </div>
        </div>
      </div>

      {/* Menu de navegação */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Produtos</Link>
        <Link to="/">Categorias</Link>
        <Link to="/">Meus Pedidos</Link>
      </nav>
    </header>
  );
}

export default Header;
