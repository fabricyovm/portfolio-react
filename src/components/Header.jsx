import { Link } from "react-router";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
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
        </nav>
      </div>
    </header>
  )
}

export default Header