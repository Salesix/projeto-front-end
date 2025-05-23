import React from 'react';
import Header from '../assets/componentes/Header';
import Footer from '../assets/componentes/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;