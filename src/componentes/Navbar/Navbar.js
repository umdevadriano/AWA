import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import '../Navbar/Navbar.css';
import { Link } from 'react-scroll';



function Navbar() {
  const navRef = useRef();
  const titulos = [
    { nome: 'Home', id: 'Home' },
    { nome: 'Serviços', id: 'Serviços' },
    { nome: 'Sobre', id: 'Sobre' },
    { nome: 'Contato', id: 'Contato' },
  ];

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header >
      <Logo logo="AWA" tamanho="3rem" tipo="T" />

      <nav ref={navRef}>
        {titulos.map((titulo) => (
          // <a href="/#">{titulo}</a>
          <Link
            activeClass="active"
            to={titulo.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
            onClick={showNavbar}
          >
            {titulo.nome}
          </Link>
        ))}
        {/* Sobre */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
