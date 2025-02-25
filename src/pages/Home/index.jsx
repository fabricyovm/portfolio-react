import Introducao from './components/Introducao';
import Tecnologias from './components/Tecnologias';
import ProjetoDestaque from './components/ProjetoDestaque';
import './index.css'

const Home = () => {

  const subir = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Introducao />
      <Tecnologias />   
      <ProjetoDestaque />  
    </>
  )
}

export default Home
