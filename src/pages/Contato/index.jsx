import { useState } from 'react';
import TituloSection from '../../components/TituloSection';
import { FaWhatsapp, FaRegEnvelope  } from "react-icons/fa";
import './index.css';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const whatsapp = 'http://wa.me/5551985546552';


  const sendEmail = (e) => {
    e.preventDefault()
    
    if(nome === '' || email === '' || mensagem === '') {
      alert("ERRO: Preencha todos os campos.")
      return;
    }
  }

  return (
    <section className="contato">
      <div className="container">
        <TituloSection titulo="CONTATO" />
        <div className="container-contato">
          <form className='formulario' onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Digite seu nome..."
              className="input-contato"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input
              type="text"
              placeholder="Digite seu e-mail..."
              className="input-contato"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              placeholder="Digite sua mensagem..."
              className='textarea-mensagem'
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />

            <input 
              type="submit" 
              value="Enviar" 
              className="btn-enviar" 
            />
          </form>
          <div className="contato-alternativo">
            <p className="texto-contato">Fale comigo pelo WhatsApp</p>
            <a href={whatsapp} className="btn-whatsapp-contato" target='_blank'>
              <FaWhatsapp />
              <span>WHATSAPP</span>
            </a>
            <p id="ou">OU</p>
            <p className="texto-contato">
              Diretamente pelo e-mail
              <span><FaRegEnvelope  />fabricyo98@hotmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato