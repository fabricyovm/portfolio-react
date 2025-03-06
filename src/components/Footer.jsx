import { Link } from 'react-router-dom'
import RedesSociais from '../components/RedesSociais'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="box-footer">
          <h2 className='titulo-footer'>FABRICYO MATTIVI</h2>
          <p className='texto-footer'>
            Busco uma oportunidade para realizar meu sonho de trabalhar como desenvolvedor. Estudo diariamente para ampliar meus conhecimentos e quero ingressar no mercado de trabalho para aplicar meus aprendizados em projetos profissionais e agregar positivamente.
          </p>
        </div>  
        <div className="box-footer">
          <h2 className='titulo-footer'>LINKS RÁPIDOS</h2>
          <ul className="footer-menu">            
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </div>  
        <div className="box-footer">
          <h2 className='titulo-footer'>REDES SOCIAIS</h2>
            <RedesSociais isFooter={true} />
        </div>     
      </div>
      <div className="copyright">
        <p>
          © 2025 Todos os direitos reservados. Criado por Fabricyo Vargas Mattivi.
        </p>
      </div>
    </footer>
  )
}

export default Footer