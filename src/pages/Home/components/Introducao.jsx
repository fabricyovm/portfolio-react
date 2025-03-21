import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import RedesSociais from '../../../components/RedesSociais'
import DeveloperImg from '../img/developer-img.png'
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
                                500,
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
                    <RedesSociais isFooter={false} />
                </div>
                <div className="intro-img">
                    <img src={DeveloperImg} />
                </div>
            </div>
        </section>
    )
}

export default Introducao