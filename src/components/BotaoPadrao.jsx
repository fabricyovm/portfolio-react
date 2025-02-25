import { Link } from 'react-router-dom'
import './BotaoPadrao.css'

const BotaoPadrao = ({ texto, caminho, target }) => {
  return target === '_blank' ? (
    <a href={caminho} className="btn-padrao" target='_blank'>{texto}</a>    
  ) : (
    <Link to={caminho} className="btn-padrao">{texto}</Link>
  )
}

export default BotaoPadrao