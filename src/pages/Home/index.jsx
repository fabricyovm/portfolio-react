import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import TituloSection from '../../components/TituloSection'
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoIosGitBranch } from "react-icons/io";
import './index.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Home = () => {
  const tecnologias = [
    {
      id: 1,
      icone: <FaReact />,
      desc: "React"
    },
    {
      id: 2,
      icone: <IoLogoJavascript />,
      desc: "JavaScript"
    },
    {
      id: 3,
      icone: <FaJava />,
      desc: "Java"
    },
    {
      id: 4,
      icone: <IoIosGitBranch />,
      desc: "Git"
    },
    {
      id: 5,
      icone: <FaHtml5 />,
      desc: "HTML"
    },
    {
      id: 6,
      icone: <FaCss3Alt />,
      desc: "CSS"
    },
  ]


  return (
    <section className='tecnologias'>
      <div className="container tecnologias-content"> 
        <TituloSection titulo="TECNOLOGIAS" />     
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={0}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev'
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
          <span className="prev"><FaArrowLeft /></span>
          <span className="next"><FaArrowRight /></span>
        </div> 
      </div>
    </section>
  )
}

export default Home
