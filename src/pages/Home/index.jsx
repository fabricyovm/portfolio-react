import Introducao from './components/Introducao'
import Tecnologias from './components/Tecnologias'
import ContainerProjetos from '../../components/ContainerProjetos'
import Projeto from '../../components/Projeto'
import TituloSectio from '../../components/TituloSection'
import ImgProjeto from '../../assets/projeto_destaque_img.jpg'
import ImgProjetoMobile from '../../assets/projeto_destaque_img_mobile.png'
import './index.css'

const Home = () => {
  const projeto = {
      imagemDesktop: ImgProjeto,
      imagemMobile: ImgProjetoMobile,
      titulo: "SITE PROFISSIONAL PARA CABELEIREIRA",
      descricao: "Este projeto foi desenvolvido para uma cabeleireira profissional, com o objetivo de apresentar seus serviços e compartilhar dicas de beleza com suas clientes. Foi um trabalho voluntário, criado com a finalidade de desenvolver meus conhecimentos em React e proporcionar uma presença digital moderna e funcional para a profissional.",
      linkGithub: "https://github.com/fabricyovm/camilla-hair-react",
      linkDemo: "https://camillasousahair.vercel.app",
    }

  return (
    <>
      <Introducao />
      <Tecnologias />   
      <ContainerProjetos>
        <TituloSectio titulo="PROJETO DESTAQUE" />
        <Projeto
          imagemDesktop={projeto.imagemDesktop}
          imagemMobile={projeto.imagemMobile}
          titulo={projeto.titulo}
          descricao={projeto.descricao}
          linkGithub={projeto.linkGithub}
          linkDemo={projeto.linkDemo}
        />
      </ContainerProjetos>  
    </>
  )
}

export default Home
