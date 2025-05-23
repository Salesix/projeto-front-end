import './footer.css';
import { FooterLogo } from './Logo';

const Footer = () => {
    return ( 
        <div className="footerConteiner">
            <div className="logoFooter">
                <FooterLogo/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus commodi possimus quam alias, soluta eius. Voluptates doloremque</p>
                <img className="icons" src="../src/assets/facebook.svg" alt="facebook" />
                <img className="icons" src="../src/assets/instagram.svg" alt="instagram" />
                <img src="../src/assets/twitter.svg" alt="twitter" />


            </div>
            <div className="info-category">
                <div className="info">
                <h5>Informação</h5>
                <ul>
                    <li>Sobre Drip Store</li>
                    <li>Segurança</li>
                    <li>Wishilist</li>
                    <li>Blog</li>
                    <li>Trabalhe conosco</li>
                    <li>Meus Pedidos</li>
                </ul>
                </div>
                <div className="cat">
                <h5>Categorias</h5>
                <ul>
                    <li>Camisetas</li>
                    <li>Calças</li>
                    <li>Bonés</li>
                    <li>Headphones</li>
                    <li>Tênis</li>
                </ul>
                </div>

            </div>
            <div className="end">
            <h5>Contato</h5>
            <ul>
                <li>Av. Exemplo de texto, 123 - 3 andar - Bairro, Cidade, Estado, 12345-123</li>
                <li>(85) 4002-8922</li>
            </ul>

            </div>
        <div className="rodape">
            <h6>© 2025 Digital College</h6>
        </div>
        </div>
        
     );
}
 
export default Footer;