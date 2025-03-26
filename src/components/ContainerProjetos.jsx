import { useLayoutEffect } from 'react'
import './ContainerProjetos.css'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ContainerProjetos = ({ children, variant = "home-page" }) => {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.container-projetos', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.container-projetos',
        start: 'top: 300px', 
        toggleActions: 'play reverse play reverse',       
      },
    })

    return () => {
      gsap.killTweensOf('.container-projetos')
    }
  })

  return (
    <section className={`container-projetos ${variant}`}>
        <div className="container">
          {children}
        </div>
    </section>
  )
}

export default ContainerProjetos