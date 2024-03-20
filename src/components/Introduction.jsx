import { CurriculumButton } from './CurriculumButton.jsx';
import { AnimatedPhraseBanner } from './AnimatedPhraseBanner.jsx';
import programmer from '../assets/programmer.jpg';
import { IoIosArrowDown } from "react-icons/io";
import React, { useState, useEffect } from 'react';

export const Introduction = () => {
    
    const [isPulsing, setIsPulsing] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsPulsing(prev => !prev);
        }, 1000); // Mude a cada segundo (1000ms)

        return () => clearInterval(interval);
    }, []);

    return (
        <div id='header' className="content">
        <h4 className='animatedPhrase'>Olá, me chamo gabriel e sou <AnimatedPhraseBanner /></h4>
        <p>
            Planejo e desenvolvo soluções através dos meus códigos.
        </p>

        <span>Veja meus conhecimentos em um documento</span>
        <div>
            <CurriculumButton text="Baixar Currículo" />

            <a href="https://drive.google.com/file/d/1FL3-V7uI5R_gBZee6L2ifwTQnk61bjFw/view?usp=drive_link" target="_blank"><button className='view_link'>Visualizar currículo</button></a>
        </div>
        <img src={programmer} className='programmer' />

        <IoIosArrowDown size={48} style={{ position: 'absolute', bottom: '15px'}} className='pulseIcon' />

        <a hidden href="https://pt.vecteezy.com/vetor-gratis/programa%C3%A7%C3%A3o">Programação Vetores por Vecteezy</a>
    </div>
    )
}