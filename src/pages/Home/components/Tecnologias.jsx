import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoIosGitBranch, IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import TituloSection from '../../../components/TituloSection'
import ReactIcone from '../img/react.svg'
import JavascriptIcone from '../img/javascript.svg'
import HTMLIcone from '../img/html.svg'
import CSSIcone from '../img/css.svg'
import JavaIcone from '../img/java.svg'
import GitIcone from '../img/git.svg'
import GithubIcone from '../img/github.svg'
import "swiper/css";
import "swiper/css/navigation";
import './Tecnologias.css';

const Tecnologias = () => {
    const [qntdSlides, setQntdSlides] = useState(4);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const tecnologias = [
        {
            id: 1,
            icone: ReactIcone,
            desc: "React"
        },
        {
            id: 2,
            icone: HTMLIcone,
            desc: "HTML"
        },
        {
            id: 3,
            icone: CSSIcone,
            desc: "CSS"
        },
        {
            id: 4,
            icone: JavascriptIcone,
            desc: "JavaScript"
        },
        {
            id: 5,
            icone: JavaIcone,
            desc: "Java"
        },
        {
            id: 6,
            icone: GitIcone,
            desc: "Git"
        },
        {
            id: 7,
            icone: GithubIcone,
            desc: "GitHub"
        },
    ];

    useEffect(() => {
        const handleSize = () => {
            if(window.innerWidth <= 480) {
                setQntdSlides(1)
                console.log(window.innerWidth)
            }
            else {
                setQntdSlides(4)
            }
        };

        handleSize()

        window.addEventListener('resize', handleSize);

        return () => window.removeEventListener('resize', handleSize);
    }, [])

    return (
        <section className='tecnologias'>
            <div className="container tecnologias-content">
                <TituloSection titulo="TECNOLOGIAS" />
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={qntdSlides}
                    spaceBetween={50}
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
                                <img src={elemento.icone} />
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