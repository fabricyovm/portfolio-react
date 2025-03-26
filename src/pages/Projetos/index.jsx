import ContainerProjetos from '../../components/ContainerProjetos'
import Projeto from '../../components/Projeto'
import ImgProjetoDestaque from '../../assets/projeto_destaque_img.jpg'
import ImgProjetoDestaqueMobile from '../../assets/projeto_destaque_img_mobile.png'
import ImgCadastroUsuarios from '../../assets/projeto_cadastro_usuarios_img.jpg'
import ImgCadastroUsuariosMobile from '../../assets/projeto_cadastro_usuarios_img_mobile.png'
import './index.css'

const Projetos = () => {
  const projetoContent = [
    {
      id: 1,
      imagemDesktop: ImgProjetoDestaque,
      imagemMobile: ImgProjetoDestaqueMobile,
      titulo: "SITE PROFISSIONAL PARA CABELEIREIRA",
      descricao: "Este projeto foi desenvolvido para uma cabeleireira profissional, com o objetivo de apresentar seus serviços e compartilhar dicas de beleza com suas clientes. Foi um trabalho voluntário, criado com a finalidade de desenvolver meus conhecimentos em React e proporcionar uma presença digital moderna e funcional para a profissional.",
      linkGithub: "https://github.com/fabricyovm/camilla-hair-react",
      linkDemo: "https://camillasousahair.vercel.app",
    },
    {
      id: 1,
      imagemDesktop: ImgCadastroUsuarios,
      imagemMobile: ImgCadastroUsuariosMobile,
      titulo: "CADASTRO DE USUÁRIOS",
      descricao: "Este projeto consiste em um sistema de cadastro de usuários simples, onde os dados do usuário são recebidos por meio de um formulário no front-end e enviados para uma API construída em Node.js. A API é responsável por validar e processar os dados, garantindo que as informações sejam salvas corretamente em um banco de dados MongoDB.",
      linkGithub: "https://github.com/fabricyovm/cadastro-usuarios-react",
    },
  ]

  return (
    <ContainerProjetos variant='projetos-page'>
      {projetoContent.map(projeto => (
        <Projeto
          key={projeto.id}
          imagemDesktop={projeto.imagemDesktop}
          imagemMobile={projeto.imagemMobile}
          titulo={projeto.titulo}
          descricao={projeto.descricao}
          linkGithub={projeto.linkGithub}
          linkDemo={projeto.linkDemo}
        />
      ))}
    </ContainerProjetos>
  )
}

export default Projetos
