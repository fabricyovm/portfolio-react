import { Link } from 'react-router-dom'
import './BotaoPadrao.css'

const BotaoPadrao = ({ texto, caminho, target, icone }) => {

  return target === '_blank' ? (
    <a href={caminho} className="btn-padrao" target='_blank'>{icone}{texto}</a>    
  ) : (
    <Link to={caminho} className="btn-padrao">{icone}{texto}</Link>
  )
}

export default BotaoPadrao