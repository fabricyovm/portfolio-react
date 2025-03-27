import { useLayoutEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import RedesSociais from '../../../components/RedesSociais'
import DeveloperImg from '../img/developer-img.png'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './Introducao.css'

const Introducao = () => {
    const [iniciarSegundaAnimacao, setiniciarSegundaAnimacao] = useState(false)

    gsap.registerPlugin(ScrollTrigger)

    useLayoutEffect(() => {
        gsap.to('.intro-img', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.intro-img',
            },
        })

        gsap.to('.introducao-descricao', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.introducao-descricao',
            },
        })

        return () => {
            gsap.killTweensOf('.intro-img')
            gsap.killTweensOf('.introducao-descricao')
        }
    })

    return (
        <section className='introducao'>
            <div className="container introducao-content">
                <div className="introducao-descricao">
                    <div className='cargo'>
                        <p className="cargo-texto">
                            Desenvolvedor<br />Front-End
                        </p>
                    </div>
                    <p className="introducao-texto">
                        Olá, eu sou Fabricyo Vargas Mattivi e estou em busca da minha primeira oportunidade profissional como desenvolvedor.
                    </p>
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