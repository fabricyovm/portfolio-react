import { Link, useLocation, useRouteError } from "react-router-dom"
import './index.css'

const ErrorPage = () => {
    const error = useRouteError(); 
    const location = useLocation(); 
    
    console.error(error);

  return (
    <div className="container-erro">
      <div className="mensagens">
          <div className="erro-404">
            <h1>{error.status}</h1>
            <p>Oops! Página não encontrada</p>
          </div>
        <p>O caminho '{location.pathname}' não existe.</p>
      </div>    
      <Link to="/" className="btn-pagina-erro">Voltar para o site</Link> 
    </div>
  )
}

export default ErrorPage