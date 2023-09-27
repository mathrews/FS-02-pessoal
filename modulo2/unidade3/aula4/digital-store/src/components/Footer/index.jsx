import { Link } from "react-router-dom";
import "./index.css";
import facebookIcon from "./assets/facebook-icon.svg";
import digitalLogo from "./assets/digital-logo.svg";
import instaIcon from "./assets/insta-icon.svg";
import twitterIcon from "./assets/twitter-icon.svg";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="links">
                    <section className="business">
                        <h1>
                            <img src={digitalLogo} />
                            Digital Store
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, eius nulla mollitia
                            excepturi eligendi hic sapiente nostrum saepe ea delectus aspernatur. 
                        </p>
                        <nav>
                            <ul>
                                <li>
                                    <Link>
                                        <img src={facebookIcon} />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img src={instaIcon} />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img src={twitterIcon} />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </section>

                    <section className="infos">
                        <div>
                            <h4>Informação</h4>
                            <nav>
                                <ul>
                                    <li>
                                        <Link>Sobre Drip Store</Link>
                                    </li>
                                    <li>
                                        <Link>Segurança</Link>
                                    </li>
                                    <li>
                                        <Link>Wishlist</Link>
                                    </li>
                                    <li>
                                        <Link>Blog</Link>
                                    </li>
                                    <li>
                                        <Link>Trabalhe conosco</Link>
                                    </li>
                                    <li>
                                        <Link>Meus Pedidos</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>

                    <section className="categories">
                        <div>
                            <h4>Categorias</h4>
                            <nav>
                                <ul>
                                    <li>
                                        <Link>Camisetas</Link>
                                    </li>
                                    <li>
                                        <Link>Calças</Link>
                                    </li>
                                    <li>
                                        <Link>Bonés</Link>
                                    </li>
                                    <li>
                                        <Link>Headphones</Link>
                                    </li>
                                    <li>
                                        <Link>Tênis</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>

                    <section className="contact">
                        <div>
                            <h4>Contato</h4>
                            <nav>
                                <ul>
                                    <li>
                                        <Link>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</Link>
                                    </li>
                                    <li>
                                        <Link>&#40;85&#41; 3051-3411</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                </div>
                <small className="copy">@ 2022 Digital College</small>
            </footer>
        </>
    );
};

export default Footer;
