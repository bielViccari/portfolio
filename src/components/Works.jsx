import achadinhos from '../assets/images/projects/achadosZZZ.png';
import tcc from '../assets/images/projects/tcc.png';
import supergestao from '../assets/images/projects/supergestao.png';

export const Works = () => {
    return (
        <>
            <div className="work">
                <div className="container">
                    <div className="title">
                        <h2>Projetos</h2>
                        <p>
                            Aqui estão alguns projetos que estou desenvolvendo, ou ja desenvolvi. Quer ver mais ? <a href="https://github.com/bielViccari">Veja no Github</a>
                        </p>
                    </div>
                    <div className="projects">
                        <div className="project">
                            <img src={achadinhos} alt="project Overview" />
                            <div className="disc">
                                <p>
                                    Projeto desenvolvido no final de 2023 para um cliente, o sistema era todo controlado pelo administrador (cliente)
                                     que publicava os produtos, e os produtos possuiam link de afiliado, para o usuário ganhar comissao por venda da 
                                    loja oficial.<br />(projeto descontinuado)
                                </p>
                                <a href="https://github.com/bielViccari/achadosZZZ">Veja o código do projeto</a>
                            </div>
                        </div>
                        <div className="project">
                            <img src={tcc} alt="project Overview" />
                            <div className="disc">
                                <p>
                                    Site desenvolvido no final de 2021, como Trabalho de Conclusão de Curso no curso técnico de ADS pela ETEC.
                                    O site tem o propósito de fazer com que os clientes publiquem roupas para doação, e os outros comentem na 
                                    publicação, asssim como uma rede social de doações.
                                </p>
                                <a href="https://github.com/bielViccari/tcc">Veja o código do projeto</a>
                            </div>
                        </div>
                        <div className="project">
                            <img src={supergestao} alt="project Overview" />
                            <div className="disc">
                                <p>
                                    Projeto onde uma empresa poderá gerenciar seus funcionários como cadastrar seus horários de ponto, e também 
                                    ter o controle o salário que está sendo gasto com cada um, para facilitar o controle de funcionários e de 
                                    dinheiro gasto pela empresa.<br /> (Projeto em Desenvolvimento).
                                </p>
                                <a href="https://github.com/bielViccari/super_gestao">Veja o código do projeto</a>
                            </div>
                        </div>
                    </div>
                    <div className="link">
                        <a className="see__more" target="_blank" href="https://github.com/bielViccari">Veja mais no meu github</a>
                    </div>
                </div>
            </div>
        </>
    )
}