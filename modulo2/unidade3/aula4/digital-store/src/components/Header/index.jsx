import { Link, NavLink } from "react-router-dom";
import "./index.css";
import cart from "./assets/Buy.svg";

const Header = () => {
    //   const location = useLocation(); // mostra a rota atual

    return (
        <>
            <header>
                <div className="menu">M</div>
                <div className="logo">
                    <div className="logo-icon"></div>
                    Digital Store
                </div>
                <div className="buscar">
                    <input
                        type="text"
                        placeholder="Pesquisar produto..."
                    />
                    <button></button>
                </div>
                <div className="acoes">
                    <Link
                        className="underlined"
                        to="/cadastro">
                        Cadastre-se
                    </Link>
                    <Link
                        className="btn"
                        to="/login">
                        Entrar
                    </Link>
                    <div className="carrinho">
                        <img src={cart} />
                        <span>0</span>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink //verificação implicita insere o active
                                to="/">
                                Início
                            </NavLink>
                        </li>
                        <li>
                            <NavLink //verificação implicita insere o active
                                to="/produtos">
                                Produtos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink //verificação implicita insere o active
                                to="/categorias"
                                >
                                Categorias
                            </NavLink>
                        </li>
                        <li>
                            <NavLink //verificação implicita insere o active
                                to="/meus-pedidos">
                                Meus Pedidos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
