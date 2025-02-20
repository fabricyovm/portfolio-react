import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoIosGitBranch, IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import TituloSection from '../../../components/TituloSection'
import "swiper/css";
import "swiper/css/navigation";
import './Tecnologias.css'

const Tecnologias = () => {
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const tecnologias = [
        {
            id: 1,
            icone: <FaReact />,
            desc: "React"
        },
        {
            id: 2,
            icone: <FaHtml5 />,
            desc: "HTML"
        },
        {
            id: 3,
            icone: <FaCss3Alt />,
            desc: "CSS"
        },
        {
            id: 4,
            icone: <IoLogoJavascript />,
            desc: "JavaScript"
        },
        {
            id: 5,
            icone: <FaJava />,
            desc: "Java"
        },
        {
            id: 6,
            icone: <IoIosGitBranch />,
            desc: "Git"
        },
        {
            id: 7,
            icone: <FaGithub />,
            desc: "GitHub"
        },
    ]

    return (
        <section className='tecnologias'>
            <div className="container tecnologias-content">
                <TituloSection titulo="TECNOLOGIAS" />
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={4}
                    spaceBetween={0}
                    autoplay
                    navigation={{
                        nextEl: '.next',
                        prevEl: '.prev',
                    }}
                    onSlideChange={(swiper) => {
                        if (swiper.isBeginning) {
                            setIsBeginning(true)
                        }
                        else {
                            setIsBeginning(false)
                        }

                        if (swiper.isEnd) {
                            setIsEnd(true)
                        }
                        else {
                            setIsEnd(false)
                        }
                    }}
                >
                    {tecnologias.map(elemento => (
                        <SwiperSlide key={elemento.id}>
                            <div className="box-tecnologia">
                                {elemento.icone}
                                <p>{elemento.desc}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="box-pagination">
                    <IoIosArrowDropleftCircle className={`prev ${isBeginning ? 'seta-transparente' : ''}`} />
                    <IoIosArrowDroprightCircle className={`next ${isEnd ? 'seta-transparente' : ''}`} />
                </div>
            </div>
        </section>
    )
}

export default Tecnologias