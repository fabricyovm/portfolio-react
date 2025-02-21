import { useState, useEffect } from "react";
import { Link } from "react-router";
import './Header.css';

const Header = () => {
  const [scrollAtual, setScrollAtual] = useState(window.scrollY);
  const [statusHeader, setStatusHeader] = useState('header-visivel');

  useEffect(() => {
    const handleScroll = () => {
      setScrollAtual((prevScroll) => {
        if(prevScroll > window.scrollY || window.scrollY <= 0) {
          setStatusHeader('header-visivel')          
        }
        else {
          setStatusHeader('header-oculto')
        }

        return window.scrollY;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <header className={`header ${statusHeader}`}>
        <div className="container header-content">
          <Link to="/" className="logo">
            <h1>fabricyo mattivi</h1>
          </Link>
          <nav className="navegacao">
            <ul className="lista-navegacao">
              <li>
                <Link to="/" className="nav-item">Home</Link>
              </li>
              <li>
                <Link to="projetos" className="nav-item">Projetos</Link>
              </li>
              <li>
                <Link to="contato" className="nav-item">Contato</Link>
              </li>
            </ul>
            <div className="btn-hamburguer">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>    
  )
}

export default Header