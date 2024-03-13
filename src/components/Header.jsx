import { AnimatedPhraseBanner } from './AnimatedPhraseBanner.jsx';
import logo from '../assets/images/GDEV1.png';

export const Header = () => {
    return(
        <>
            <a href="#header" className="back__to__top">
                <i className="fa fa-arrow-up"></i>
            </a>
            <div className="container">
                <header id="header">
                    <nav>
                        <div className="logo">
                            <a href="#"><img src={logo} alt="Logo" /></a>
                        </div>
                        <div className="links">
                            <ul>
                                <li><a href="#footer">Entre em contato</a></li>
                                <li><a href="#">Projetos</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="content">
                        <h4>Olá, me chamo gabriel e sou <AnimatedPhraseBanner /></h4>
                        <p>
                            Planejo e desenvolvo soluções através dos meus códigos.
                        </p>
                    </div>
                </header>
            </div>
        </>
    )
}