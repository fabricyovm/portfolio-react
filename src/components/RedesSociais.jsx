import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import './RedesSociais.css'

const RedesSociais = ({isFooter}) => {   

    return (
        <div className={`redes-sociais ${isFooter ? 'is-footer' : ''}`}>
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
    )
}

export default RedesSociais