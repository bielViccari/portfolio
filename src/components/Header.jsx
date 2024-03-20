import logo from '../assets/images/GDEV1.png';
import { Introduction } from './Introduction';
export const Header = () => {
    return (
        <>
            <div className="container">
                <header>
                    <nav>
                        <div className="logo">
                            <a href="#"><img src={logo} alt="Logo" /></a>
                        </div>
                        <div className="links">
                            <ul>
                                <li><a href="#footer">Entre em contato</a></li>
                                <li><a href="#projects">Projetos</a></li>
                            </ul>
                        </div>
                    </nav>
                    <Introduction />
                </header>
            </div>
        </>
    )
}