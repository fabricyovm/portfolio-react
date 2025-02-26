import TituloSectio from '../../../components/TituloSection';
import './ProjetoDestaque.css';
import BotaoPadrao from '../../../components/BotaoPadrao';
import ImgProjeto from '../img/projeto_destaque_img.png'
import ImgProjetoMobile from '../img/projeto_destaque_img_mobile.png'
import { FaGithub, FaRegEye  } from "react-icons/fa";

const ProjetoDestaque = () => {
  return (
    <section className='projeto-destaque'>
        <div className="container">
            <TituloSectio titulo="PROJETO DESTAQUE" />
            <div className="projeto">
              <div className="img-projeto">
                <img className='img-destaque-desktop' src={ImgProjeto} alt="Projeto destaque" />
                <img className='img-destaque-mobile' src={ImgProjetoMobile} alt="Projeto destaque" />
              </div>
              <div className="desc-projeto">
                <div className="box-texto-descricao">
                  <h1 className='titulo-projeto'>SITE PROFISSIONAL PARA CABELEIREIRA</h1>
                  <p className='texto-descricao'>
                    Este projeto foi desenvolvido para uma cabeleireira profissional, com o objetivo de apresentar seus serviços e compartilhar dicas de beleza com suas clientes. Foi um trabalho voluntário, criado com a finalidade de desenvolver meus conhecimentos em React e proporcionar uma presença digital moderna e funcional para a profissional.
                  </p>
                </div>
                <div className="box-botoes">
                  <BotaoPadrao texto="GITHUB" caminho="https://github.com/fabricyovm/camilla-hair-react" target="_blank" icone={<FaGithub />} />
                  <BotaoPadrao texto="VER SITE" caminho="https://portfolio-fabricyo-mattivi.vercel.app" target="_blank" icone={<FaRegEye />} />
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default ProjetoDestaque