import bootstrap from '../assets/images/devIcons/bootstrap-original.svg';
import docker from '../assets/images/devIcons/docker-original.svg';
import hibernate from '../assets/images/devIcons/hibernate-original.svg';
import intellij from '../assets/images/devIcons/intellij-original.svg';
import java from '../assets/images/devIcons/java-original.svg';
import tailwind from '../assets/images/devIcons/tailwindcss-original.svg';
import laravel from '../assets/images/devIcons/laravel-original.svg';
import postgres from '../assets/images/devIcons/postgresql-original.svg';
import vscode from '../assets/images/devIcons/vscode-original.svg';
import vue from '../assets/images/devIcons/vuejs-original.svg';
import react from '../assets/images/devIcons/react-original.svg';
import spring from '../assets/images/devIcons/spring-original.svg';
import php from '../assets/images/devIcons/php-original.svg';
import mysql from '../assets/images/devIcons/mysql-original-wordmark.svg';
import html from '../assets/images/devIcons/html5-original.svg';
import css from '../assets/images/devIcons/css3-original.svg';
import javascript from '../assets/images/devIcons/javascript-original.svg';
import backend1 from '../assets/images/devIcons/backend2.svg'
import frontend from '../assets/images/devIcons/frontend.svg'
import tools from '../assets/images/devIcons/tools.svg'


export const StackCard = () => {
    return (
        <>
            <div className="intro">
                <div className="container">
                    <div className="content">
                        <h2>Quando Iniciei com a programação?</h2>
                        <p>
                            Comecei a aprender programação pela primeira em 2019 vez no ensino médio. Tive a oportunidade
                            de realizar um curso técnico de Análise e Desenvolvimento de Sistemas integrado com o
                            ensino médio, então tive meu primeiro contato com a programação, desde então eu não tinha
                            a certeza de que programação era a profissão que eu desejava para o futuro.
                            Em 2021 eu tomei a decisão que me tornaria desenvolvedor de sistemas, me interessei por PHP e 
                            fui me desenvolvendo desde então!
                        </p>
                    </div>
                </div>
            </div>


            <div className="boxes">
                <div className="container">
                    <div className="boxs skills">
                        <div className="box">
                            <img src={frontend} alt="Desgining" />
                            <h2>Front-end Developer</h2>
                            <p className="disc">
                                Linguagens, frameworks e bibliotecas que utilizo para criação de landing pages, estilizações e tudo que envolve o Front-end de uma aplicação.
                            </p>
                            <p>
                                Linguagens:
                                <div className="iconsBox">
                                <div className="iconContainerRed">
                                        <img src={html} alt="Imagem 1" />
                                    </div>
                                    <div className="iconContainerBlue">
                                        <img src={css} alt="Imagem 1" />
                                    </div>
                                    <div className="iconContainerYellow">
                                        <img src={javascript} alt="Imagem 1" />
                                    </div>
                                </div>
                            </p>
                            <p>
                                Frameworks e Bibliotecas:

                                <div className="iconsBox">
                                <div className="iconContainerPurple">
                                        <img src={bootstrap} alt="Imagem 1" />
                                    </div>
                                    <div className="iconContainerBlue">
                                        <img src={tailwind} alt="Imagem 1" />
                                    </div>
                                    <div className="iconContainerBlue">
                                        <img src={react} alt="Imagem 1" />
                                    </div>
                                    <div className="iconContainerGreen">
                                        <img src={vue} alt="Imagem 1" />
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div className="box">
                            <img src={backend1} alt="Front-end" />
                            <h2>Back-end Developer</h2>
                            <p className="disc">
                                Linguagens, frameworks e bibliotecas que utilizo para criação de Api's, microservices e tudo que envolve o back-end de uma aplicação.
                            </p>
                            <p>
                                Linguagens:
                                <div className="iconsBox">
                                <div className="iconContainerBlue">
                                        <img src={php} alt="Imagem 1" />
                                    </div>
                                    <div className="iconContainerBlue">
                                        <img src={java} alt="Imagem 1" />
                                    </div>
                                </div>
                            </p>
                            <p>
                                Frameworks e Bibliotecas:
                                <div className="iconsBox">
                                <div className="iconContainerGreen">
                                        <img src={spring} alt="Imagem 1" />
                                    </div>
                                    <div className="iconContainerRed">
                                        <img src={laravel} alt="Imagem 1" />
                                    </div>
                                    <div className="iconContainerGreen">
                                        <img src={hibernate} alt="Imagem 2" />
                                    </div>
                                </div>
                            </p>

                            <p>
                                Banco de dados:
                                <div className="iconsBox">
                                <div className="iconContainerBlue">
                                        <img src={mysql} alt="Imagem 1" />
                                    </div>
                                    <div className="iconContainerBlue">
                                        <img src={postgres} alt="Imagem 1" />
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div className="box">
                            <img src={tools} alt="tools" />
                            <h2>Development tools</h2>
                            <p className="disc">
                                Ferramentas que utilizo no dia a dia para desenvolvimento.
                            </p>
                            <p>
                                IDE's:
                                <div className="iconsBox">
                                <div className="iconContainerBlue">
                                        <img src={intellij} alt="Imagem 1" />
                                    </div>
                                    <div className="iconContainerBlue">
                                        <img src={vscode} alt="Imagem 1" />
                                    </div>
                                </div>
                            </p>
                            <ul>
                                Ferramentas:
                                <li>Trello</li>
                                <li>Miro - UML Diagram</li>
                                <li>Spring Initialzr</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}