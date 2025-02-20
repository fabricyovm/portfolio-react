import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import './introducao.css'

const Introducao = () => {   
    return (
        <section className='introducao'>
            <div className="container introducao-content">
                <div className='cargo'>
                    <p>Desenvolvedor</p>
                    <p>Front-end</p>
                </div>
                <p>Olá, eu sou Fabricyo Vargas Mattivi e estou em busca da minha primeira oportunidade profissional como desenvolvedor.</p>
                <div className="redes-sociais">
                    <a href="https://github.com/fabricyovm" target="_blank" >
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/fabricyovm" target="_blank" >
                        <FaLinkedinIn />
                    </a>
                    <a href="http://wa.me/5551985546552" target="_blank" >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Introducao