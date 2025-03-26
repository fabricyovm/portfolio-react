import { FaGithub, FaRegEye } from "react-icons/fa"
import BotaoPadrao from '../components/BotaoPadrao';
import './Projeto.css'

const Projeto = ({
  imagemDesktop,
  imagemMobile,
  titulo,
  descricao,
  linkGithub,
  linkDemo,
}) => {
  return (
    <div className="projeto">
      <div className="img-projeto">
        <img className='img-destaque-desktop' src={imagemDesktop} alt="Imagem do projeto" />
        <img className='img-destaque-mobile' src={imagemMobile} alt="Imagem do projeto" />
      </div>
      <div className="desc-projeto">
        <div className="box-texto-descricao">
          <h1 className='titulo-projeto'>{titulo}</h1>
          <p className='texto-descricao'>
            {descricao}
          </p>
        </div>
        <div className="box-botoes">
          <BotaoPadrao texto="GITHUB" caminho={linkGithub} target="_blank" icone={<FaGithub />} />
          {linkDemo && <BotaoPadrao texto="VER SITE" caminho={linkDemo} target="_blank" icone={<FaRegEye />} />}
        </div>
      </div>
    </div>
  )
}

export default Projeto