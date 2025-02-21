import { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TypeAnimation } from 'react-type-animation';
import './introducao.css';

const Introducao = () => {
    const [iniciarSegundaAnimacao, setiniciarSegundaAnimacao] = useState(false)

    return (
        <section className='introducao'>
            <div className="container introducao-content">
                <div className="introducao-descricao">
                    <div className='cargo'>
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                'Desenvolvedor\nFront-end',
                                (el) => {
                                    el.classList.add('cargo-texto')
                                },
                                1500,
                                (el) => {
                                    setiniciarSegundaAnimacao(true)
                                    el.classList.remove('cargo-texto')
                                }
                            ]}
                            wrapper="p"
                            speed={150}
                            className="cargo-texto"
                        />
                    </div>
                    {iniciarSegundaAnimacao && (
                        <TypeAnimation
                            cursor={true}
                            sequence={['Olá, eu sou Fabricyo Vargas Mattivi e estou em busca da minha primeira oportunidade profissional como desenvolvedor.']}
                            wrapper="p"
                            speed={120}
                            className="introducao-texto"                            
                        />
                    )}
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
                <div className="laptop">
                    <LiaLaptopCodeSolid />
                </div>
            </div>
        </section>
    )
}

export default Introducao