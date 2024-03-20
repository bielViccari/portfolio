import logo from '../assets/images/GDEV1.png';
export const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="start-project">
                        <h2>Interessado(a) ?</h2>
                        <p>
                            Entre em contato para possíveis freelances, ou vagas de emprego!
                        </p>
                        <a href="https://api.whatsapp.com/send/?phone=18981469767" className="see__more">entrar em contato</a>
                    </div>
                    <div className="content">
                        <img src={logo} alt="logo" />
                        <p>Aprender, Desenvolver e solucionar.</p>
                        <div className="links">
                            <a href="#" target="_blank" className="see__more"><i className="fab fa-instagram"></i></a>
                            <a href="https://github.com/bielViccari" className="see__more"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/gabriel-viccari-de-almeida/" target="_blank" className="see__more"><i className="fab fa-linkedin"></i></a>
                            <a href="mailto:gabriel.viccari20@gmail.com" target="_blank" className="see__more"><i className="fa fa-envelope"></i></a>
                        </div>
                        <a href="#header" class="back__to__top">
                            <div class="container2">
                                <i class="fa fa-arrow-up arrow"></i>
                                <span className='backToTop'>Voltar ao Topo</span>
                            </div>
                        </a>


                    </div>
                </div>
            </footer>
        </>
    )
}