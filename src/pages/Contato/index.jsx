import { use, useState } from 'react';
import TituloSection from '../../components/TituloSection';
import { FaWhatsapp, FaRegEnvelope  } from "react-icons/fa";
import emailjs from '@emailjs/browser'
import './index.css';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const whatsapp = 'http://wa.me/5551985546552';


  const sendEmail = async (e) => {
    e.preventDefault()
    
    if(nome === '' || email === '' || mensagem === '') {
      alert("ERRO: Preencha todos os campos.")
      return;
    }

    const templateParams = {
      from_name: nome,
      email: email,
      message: mensagem,
    }

    try {
      setIsLoading(true)
      
      const response = await emailjs.send('service_b9w9v0n', 'template_0qn9u1i', templateParams, 'aXZI1aNLEYXXIZOm0')

      console.log('E-mail enviado: ' + response.status, response.text)
      alert("E-mail enviado com sucesso!")

      setNome('')
      setEmail('')
      setMensagem('')
    } catch(err) {
      console.error("ERRO: Falha ao enviar o e-mail: " + err)
      alert("Ops... Falha ao enviar o e-mai. Tente novamente mais tarde ou entre em contato pelo WhatsApp.")
    } finally {
      setIsLoading(false)
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
              type="email"
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
              value={`${isLoading ? 'Aguarde...' : 'Enviar'}`} 
              disabled={isLoading}
              className={`${isLoading ? 'btn-enviar loading' : 'btn-enviar'}`} 
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